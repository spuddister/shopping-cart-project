// import "./ShoppingCart.css";
import React from "react";

function CartItem({ itemData, addToCart, removeFromCart }) {
  return (
    <div className="cart-item">
      <p>{itemData.title}</p>
      <p>{itemData.price * itemData.count}</p>
      <p>Amount: {itemData.count}</p>
      <button onClick={() => removeFromCart(itemData)}>Remove</button>
    </div>
  );
}

export default CartItem;
