// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HederaMarketPlace {
    struct Item {
        uint id;
        string name;
        uint price;
        address payable seller;
        bool exists;
    }

    mapping(uint => Item) public items;
    uint public itemCount;

    event ItemAdded(uint indexed id, string name, uint price, address seller);
    event ItemPurchased(uint indexed id, string name, uint price, address buyer);

    function addItem(string memory _name, uint _price) public {
        require(_price > 0, "Price must be greater than zero");

        itemCount++;
        items[itemCount] = Item(itemCount, _name, _price, payable(msg.sender), true);

        emit ItemAdded(itemCount, _name, _price, msg.sender);
    }

    function buyItem(uint _id) public payable {
        require(_id > 0 && _id <= itemCount, "Invalid item ID");
        require(items[_id].exists, "Item does not exist");
        require(msg.value >= items[_id].price, "Insufficient funds");

        Item memory item = items[_id];
        item.seller.transfer(item.price);

        delete items[_id];

        emit ItemPurchased(_id, item.name, item.price, msg.sender);
    }
}
