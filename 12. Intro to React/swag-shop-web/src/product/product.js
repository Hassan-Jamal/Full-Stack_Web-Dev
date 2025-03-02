import React, { useState } from "react";

const Product = ({ name, price, image }) => {
  const [wishlist, setWishlist] = useState(false);

  const handleWishlist = () => {
    setWishlist(!wishlist);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{price}</p>
      <button className={`wishlist-btn ${wishlist ? "added" : ""}`} onClick={handleWishlist}>
        {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default Product;
