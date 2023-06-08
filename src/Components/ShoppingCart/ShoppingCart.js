import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";
import React from "react";

function ShoppingCart({
  modalClass,
  cart,
  addToCart,
  removeFromCart,
  toggleCartVisible,
}) {
  const cartArray = Object.keys(cart);
  return (
    <div className={`ShoppingCart ${modalClass}`}>
      <h1>Shopping Cart</h1>
      <button onClick={() => toggleCartVisible()}>x</button>
      {cartArray.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
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
      )}
    </div>
  );
}

export default ShoppingCart;
