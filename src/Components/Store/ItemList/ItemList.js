import "./ItemList.css";
import React from "react";
import Item from "../ItemCard/ItemCard";

function ItemList({ storeContent, addToCart }) {
  return (
    <div className="item-list">
      {storeContent.map((itemData, index) => (
        <Item key={index} itemData={itemData} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ItemList;
