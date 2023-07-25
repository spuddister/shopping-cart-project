import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

//NEXT STEP IS TO CALCULATE THE TOTAL AND TAX AMOUNTS

function ShoppingCart({
  cartClass,
  cart,
  addToCart,
  removeFromCart,
  toggleCartVisible,
  emptyCart,
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
        <ul className="cart-list">
          {cartArray.map((itemID) => {
            return (
              <li className="cart-item-li" key={itemID}>
                <CartItem
                  className="cart-item"
                  itemData={cart[itemID]}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              </li>
            );
          })}
        </ul>
      )}
      {cartArray.length === 0 ? null : (
        <div className="checkout-wrapper">
          <div className="subtotal">
            <span>Subtotal: </span>
            <span>138$</span>
          </div>
          <div className="tax">
            <span>Estimated Tax: </span>
            <span>69$</span>
          </div>
          <div className="total">
            <span>Total: </span>
            <span>450$</span>
          </div>

          <Link
            to="/"
            className="checkout"
            onClick={() => {
              emptyCart();
              toggleCartVisible();
            }}
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
