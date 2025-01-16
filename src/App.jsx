import { useState } from "react";
import "./App.css";
import ImageGallery from "./ImageSec";
import CounterSec from "./counter";

function App() {
  return (
    <div className="website">
      <nav>
        <h1 id="title">sneakers</h1>
        <ul>Collections</ul>
        <ul>Men</ul>
        <ul>Women</ul>
        <ul>About</ul>
        <ul>Contact</ul>
        
      </nav>
      <hr width="90%" color="grey" />
      <main>
        <div className="imageSection">
          <ImageGallery />
        </div>
        <div className="detailsSection">
          <h5>SNEAKER COMPANY</h5>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <h2>$125.00</h2>
            <strike>$250</strike>
          </div>
          <div className="counterpart">
            <CounterSec/>
            <button id="cart">
              <img src="/icons/icon-cart.svg" alt="addtocart" />
              Add To Cart
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
