
//*********************************GPT CODE */


import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <header className="home-header">
        <div className="hero">
          <h1>Step Into the World of Swag! 😎</h1>
          <p>Find exclusive fashion, accessories, and more at unbeatable prices.</p>
          <div className="hero-buttons">
            <button className="shop-now" onClick={() => navigate("/products")}>
              🛍️ Shop Now
            </button>
            <button className="explore" onClick={() => navigate("/about")}>
              🔍 Explore More
            </button>
          </div>
        </div>
      </header>

      {}
      <section className="featured-section">
        <h2>🔥 Trending Categories</h2>
        <div className="category-container">
          <div className="category-card" onClick={() => navigate("/products?category=fashion")}>
            <img src="https://source.unsplash.com/300x300/?fashion" alt="Fashion" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card" onClick={() => navigate("/products?category=shoes")}>
            <img src="https://source.unsplash.com/300x300/?shoes" alt="Shoes" />
            <h3>Shoes</h3>
          </div>
          <div className="category-card" onClick={() => navigate("/products?category=accessories")}>
            <img src="https://source.unsplash.com/300x300/?watch" alt="Accessories" />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo-section">
        <h2>🚀 Limited Time Offers</h2>
        <p>Get up to 50% OFF on exclusive collections. Hurry before the deals end!</p>
        <button className="shop-sale" onClick={() => navigate("/sale")}>
          🎉 Shop the Sale
        </button>
      </section>
    </div>
  );
};

export default Home;
