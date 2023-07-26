import "./Store.css";
import React from "react";
import ItemList from "./ItemList/ItemList";
import { useState, useEffect } from "react";

function Store({ addToCart }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [storeContent, setStoreContent] = useState([]);
  useEffect(() => {
    function fetchStoreItems() {
      setIsLoaded(false);
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          // console.log("inside fetch:", json);
          setStoreContent(json);
          setIsLoaded(true);
          console.log(json);
        });
    }
    try {
      fetchStoreItems();
    } catch (error) {
      console.log("Failed to load list.");
    }
  }, []);

  return (
    <div className="Store">
      <h1>Store</h1>
      {isLoaded ? (
        <ItemList storeContent={storeContent} addToCart={addToCart} />
      ) : (
        <div>item list is loading icon</div>
      )}
    </div>
  );
}

export default Store;
