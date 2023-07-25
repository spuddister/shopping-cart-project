import "./CartItem.css";
import React from "react";

function CartItem({ itemData, addToCart, removeFromCart }) {
  return (
    <div className="cart-item">
      <p>{itemData.title}</p>
      <p className="item-price">${itemData.price}</p>
      <div className="count-wrapper">
        <button onClick={() => removeFromCart(itemData)}>-</button>
        <p>{itemData.count}</p>
        <button onClick={() => addToCart(itemData)}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
