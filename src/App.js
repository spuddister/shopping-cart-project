import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  const [cart, setCart] = useState({});
  const [cartVisible, setCartVisible] = useState(false);

  //write test for both addtoCart and removefromcart
  const addToCart = (item) => {
    let tempCart = { ...cart };
    if (tempCart[item.id] !== undefined) {
      tempCart[item.id].count = tempCart[item.id].count + 1;
    } else {
      tempCart[item.id] = item;
      tempCart[item.id].count = 1;
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
      tempCart[item.id].count = tempCart[item.id].count - 1;
    }
    setCart(tempCart);
  };

  const toggleCartVisible = () => {
    cartVisible ? setCartVisible(false) : setCartVisible(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Nav cart={cart} toggleCartVisible={toggleCartVisible} />
        <ShoppingCart
          cartClass={cartVisible ? "cart-visible" : "cart-hidden"}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          toggleCartVisible={toggleCartVisible}
        />
        <div className="page-container">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
