import "./CartItem.css";
import React from "react";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";

function CartItem({ itemData, addToCart, removeFromCart }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="cart-item">
      <div className="item-header">
        <p>{itemData.title}</p>
        <div className="cart-image-container">
          {isLoaded ? (
            <img
              className={"item-image image-is-loaded"}
              src={itemData.image}
              alt={itemData.title}
            />
          ) : (
            <>
              <img
                className={"item-image image-not-loaded"}
                src={itemData.image}
                alt={itemData.title}
                onLoad={imageLoaded}
              />
              <Spinner />
            </>
          )}
        </div>
      </div>
      <div className="item-details-wrapper">
        <div className="count-wrapper">
          <button onClick={() => removeFromCart(itemData)}>-</button>
          <p className="count">{itemData.count}</p>
          <button onClick={() => addToCart(itemData)}>+</button>
        </div>
        <p className="item-price">
          {(itemData.price * itemData.count).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
