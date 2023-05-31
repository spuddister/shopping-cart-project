import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  const { cart, setCart } = useState([]);
  const addToCart = (currentCart, item) => {
    setCart([...currentCart, item]);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Nav cartSize={cart} />
        <ShoppingCart cart={cart} setCart={setCart} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
