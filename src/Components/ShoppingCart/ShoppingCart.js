import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";
import React from "react";

function ShoppingCart({ cart, addToCart, removeFromCart }) {
  const cartArray = Object.keys(cart);
  return (
    <div className="ShoppingCart">
      <h1>Shopping Cart</h1>
      <ul>
        {cartArray.map((itemID) => {
          return (
            <li key={itemID}>
              <CartItem
                itemData={cart[itemID]}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingCart;
