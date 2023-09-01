import "./ItemCard.css";
import React from "react";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";

function Item({ itemData, addToCart }) {
  // console.log("item info: ", itemData);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="item-card">
      <div className="image-container">
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
      <p className="item-card-title">{itemData.title}</p>
      <p className="item-card-price">
        {itemData.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      <button
        className={"add-to-cart-button"}
        onClick={() => addToCart(itemData)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Item;
