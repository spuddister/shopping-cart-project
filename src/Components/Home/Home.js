import "./Home.css";
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="logo-container">
        <div className="logo">F</div>
      </div>
      <div className="banner">
        <div className="banner-message">
          <p className="message-one">real stuff...</p>
          <p className="message-two">...fake store</p>
          <p className="message-three">Shop Now!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
