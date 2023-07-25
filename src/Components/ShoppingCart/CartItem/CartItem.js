import "./CartItem.css";
import React from "react";

function CartItem({ itemData, addToCart, removeFromCart }) {
  return (
    <div className="cart-item">
      <p>{itemData.title}</p>
      <div className="item-details-wrapper">
        <div className="count-wrapper">
          <button onClick={() => removeFromCart(itemData)}>-</button>
          <p className="count">{itemData.count}</p>
          <button onClick={() => addToCart(itemData)}>+</button>
        </div>
        <p className="item-price">
          {itemData.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
