import React, { useState, useEffect } from "react";
import web3 from "./web3";
import hederamarketplace from "./HederaMarketPlace";
import AddItem from "./AddItem";
import "./App.css";




function App() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetchItems();
  });

  const fetchItems = async () => {

    const itemCount = await hederamarketplace.methods.itemCount().call();
    let fetchedItems = [];
    console.log(`fetching ${itemCount}`)
    for (let i = 1; i <= itemCount; i++) {
      const item = await hederamarketplace.methods.items(i).call();
      fetchedItems.push({
        id: item.id,
        name: item.name,
        price: web3.utils.fromWei(item.price,"ether"),
      });
    }

    setItems(fetchedItems);
  };


  const buyItem = async (itemId, price) => {
    try {
      const accounts = await web3.eth.getAccounts();

      await hederamarketplace.methods.buyItem(itemId).send({from:accounts[0],value:web3.utils.toWei("1","ether")});

      window.alert("Item purchased successfully!");
    } catch (error) {
      console.error("Error buying item:", error);
      window.alert("Error buying item. Please try again.");
    }


  };

  const addItem = async (name, price) => {
    try {
      const accounts = await web3.eth.getAccounts();
      await hederamarketplace.methods.addItem(name, price).send({from:accounts[0]});
      window.alert("Item added successfully!");
      fetchItems();
    } catch (error) {
      console.error("Error adding item:", error);
      window.alert("Error adding item. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Marketplace</h1>
      <h2 className="subtitle">Items for Sale</h2>
      {items.length === 0 ? (
        <p className="no-items">No items available</p>
      ) : (
        <div className="card-container">
          {items.map((item) => (
            <div className="card" key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: 1 HBAR</p>
            <button onClick={() => buyItem(item.id, item.price)}>Buy</button>
            </div>
          ))}
        </div>
      )}
       <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
