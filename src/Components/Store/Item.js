// import "./Nav.css";
// import { FaShoppingCart } from "react-icons/fa";
import React from "react";

function Item({ itemData, addToCart, removeFromCart }) {
  // console.log("item info: ", itemData);
  return (
    <div className="item-card">
      <p>{itemData.title}</p>
      <button onClick={() => addToCart(itemData)}>Add to cart</button>
    </div>
  );
}

export default Item;
