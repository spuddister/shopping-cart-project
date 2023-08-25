import "./ItemList.css";
import React from "react";
import Item from "../ItemCard/ItemCard";

function ItemList({ content, addToCart }) {
  return (
    <div className="item-list">
      {content.map((itemData, index) => (
        <Item key={index} itemData={itemData} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ItemList;
