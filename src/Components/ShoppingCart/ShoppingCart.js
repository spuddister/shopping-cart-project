import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

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
      <div className="cart-header">
        <button
          className="close-cart-button"
          onClick={() => toggleCartVisible()}
        >
          Close
        </button>
        <h1 className="cart-title">
          <FaShoppingCart className="cart-icon" /> Cart
        </h1>
      </div>

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
