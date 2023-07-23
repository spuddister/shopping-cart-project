import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";
import React from "react";

function ShoppingCart({
  cartClass,
  cart,
  addToCart,
  removeFromCart,
  toggleCartVisible,
}) {
  const cartArray = Object.keys(cart);
  return (
    <div className={`ShoppingCart ${cartClass}`}>
      <h1 className="cart-title">Cart</h1>
      <button className="close-cart-button" onClick={() => toggleCartVisible()}>
        Close
      </button>
      {cartArray.length === 0 ? (
        <p className="empty-cart-message">Your cart is currently empty.</p>
      ) : (
        <ul>
          {cartArray.map((itemID) => {
            return (
              <li className="cart-item" key={itemID}>
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
