import web3 from "./web3";

const address = "0x37A68D0d4c9633f51c923e34d2292596B587D8C2";

const abi = [
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				}
			],
			"name": "ItemAdded",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				}
			],
			"name": "ItemPurchased",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_price",
					"type": "uint256"
				}
			],
			"name": "addItem",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_id",
					"type": "uint256"
				}
			],
			"name": "buyItem",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "itemCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "items",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "address payable",
					"name": "seller",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "exists",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
export default new web3.eth.Contract(abi,address);
