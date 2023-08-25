import "./Store.css";
import React from "react";
import ItemList from "./ItemList/ItemList";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

function Store({ addToCart }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [storeContent, setStoreContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [filterValue, setFilterValue] = useState("none");
  const [title, setTitle] = useState("All Items");

  useEffect(() => {
    function fetchStoreItems() {
      setIsLoaded(false);
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setStoreContent(json);
          setFilteredContent(json);
          setIsLoaded(true);
        });
    }
    try {
      fetchStoreItems();
    } catch (error) {
      console.log("Failed to load list.");
    }
  }, []);

  const filterList = (e) => {
    setFilterValue(e.target.value);
    if (e.target.value === "none") {
      setFilteredContent(storeContent);
      setTitle("All Items");
      return;
    }
    const tempArray = storeContent.filter(
      (item) => item.category === e.target.value
    );
    setFilteredContent(tempArray);
    setTitle(e.target.labels[0].textContent);
  };

  return (
    <div className="Store">
      <div className="store-header">
        <h1 className="store-title">{title}</h1>
        <div className="list-controls">
          <div className="filter-wrapper">
            Filter
            <fieldset>
              <input
                type="radio"
                name="filter"
                value="none"
                id="none"
                checked={filterValue === "none"}
                onChange={filterList}
              />
              <label htmlFor="none">None</label>

              <input
                type="radio"
                name="filter"
                value="men's clothing"
                id="men"
                checked={filterValue === "men's clothing"}
                onChange={filterList}
              />
              <label htmlFor="men">Men's Clothing</label>

              <input
                type="radio"
                name="filter"
                value="women's clothing"
                id="women"
                checked={filterValue === "women's clothing"}
                onChange={filterList}
              />
              <label htmlFor="women">Women's Clothing</label>

              <input
                type="radio"
                name="filter"
                value="jewelery"
                id="jewelery"
                checked={filterValue === "jewelery"}
                onChange={filterList}
              />
              <label htmlFor="jewelery">Jewelery</label>

              <input
                type="radio"
                name="filter"
                value="electronics"
                id="electronics"
                checked={filterValue === "electronics"}
                onChange={filterList}
              />
              <label htmlFor="electronics">Electronics</label>
            </fieldset>
          </div>
        </div>
      </div>
      {isLoaded ? (
        <ItemList content={filteredContent} addToCart={addToCart} />
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Store;
