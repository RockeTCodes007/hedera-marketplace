import React, { useState } from "react";
import web3 from "./web3";

const AddItem = ({ addItem }) => {
  const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  const price = "0.0000000001";

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // const handlePriceChange = (event) => {
  //   setPrice(event.target.value);
  // };

  const addItemToContract = async () => {
    try {

      await addItem(name, web3.utils.toWei(price,"ether"));

      setName("");
      // setPrice("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="add-item-container">
      <h2 className="add-item-title">Add Item</h2>
      <div className="add-item-form">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <button onClick={addItemToContract}>Add Item</button>
      </div>
    </div>
  );
};

export default AddItem;
