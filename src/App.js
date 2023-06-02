import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let tempCart = { ...cart };
    if (tempCart[item.id] !== undefined) {
      tempCart[item.id].count += tempCart[item.id].count;
    } else {
      tempCart[item.id] = item;
    }
    setCart(tempCart);
  };

  const removeFromCart = (item) => {
    let tempCart = { ...cart };
    if (tempCart[item.id] === undefined) {
      return;
    }
    if (tempCart[item.id].count <= 1) {
      delete tempCart[item.id];
    } else {
      tempCart[item.id].count -= tempCart[item.id].count;
    }
    setCart(tempCart);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Nav cartSize={cart.length} />
        <ShoppingCart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/store"
            element={
              <Store addToCart={addToCart} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
