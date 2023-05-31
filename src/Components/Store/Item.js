// import "./Nav.css";
// import { FaShoppingCart } from "react-icons/fa";
import React from "react";

function Item({ itemData }) {
  console.log("item info: ", itemData.title);
  return (
    <div className="item-card">
      <p>{itemData.title}</p>
    </div>
  );
}

export default Item;
