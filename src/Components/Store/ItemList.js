// import "./ItemList.css";
import React from "react";
import Item from "./Item";

function ItemList({ storeContent }) {
  return (
    <div className="item-list">
      <h2>Item List</h2>
      {storeContent.map((itemData, index) => (
        <Item itemData={itemData} key={index} />
      ))}
    </div>
  );
}

export default ItemList;
