import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";
import React from "react";
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
  let cartSubtotal = 0;

  const cartArray = Object.keys(cart);
  cartArray.forEach((item) => {
    cartSubtotal += cart[item].price * cart[item].count;
  });

  return (
    <div className={`ShoppingCart ${cartClass}`}>
      <div className="cart-header">
        <button
          className="close-cart-button"
          onClick={() => toggleCartVisible()}
        >
          Close
        </button>
        <h1 className="cart-title">Cart</h1>
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
            <span>
              {cartSubtotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div className="tax">
            <span>Estimated Tax: </span>
            <span>
              {(cartSubtotal * 0.13).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div className="total">
            <span>Total: </span>
            <span>
              {(cartSubtotal * 1.13).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
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
