// import "./ItemList.css";
import React from "react";
import Item from "./Item";

function ItemList({ storeContent, addToCart, removeFromCart }) {
  return (
    <div className="item-list">
      <h2>Item List</h2>
      {storeContent.map((itemData, index) => (
        <Item
          key={index}
          itemData={itemData}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default ItemList;
