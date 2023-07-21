import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="logo-container">
          <div className="logo">F</div>
        </div>
        <div className="visit-store-wrapper">
          <Link className="visit-store-link" to={"/store"}>
            Click here to visit the store
          </Link>
        </div>
      </div>
      <div className="banner">
        <div className="banner-message">
          <p className="message-one">real stuff...</p>
          <p className="message-two">...fake store</p>
          <p className="message-three">Pretend to shop now!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
