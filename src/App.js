import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ShoppingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
