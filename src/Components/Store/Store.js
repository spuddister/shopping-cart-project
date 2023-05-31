import "./Store.css";
import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

function Store(props) {
  const { isLoading, setIsLoading } = useState(false);

  // fetch("https://api.storerestapi.com/products/running-sneaker")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json))
  //   .then((json) => {
  //     setIsLoading(false);
  //   });

  return (
    <div className="Store">
      <h1>Store</h1>
      {isLoading ? <div>loading icon</div> : <ItemList />}
    </div>
  );
}

export default Store;
