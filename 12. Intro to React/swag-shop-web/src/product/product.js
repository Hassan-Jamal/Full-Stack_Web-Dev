import React from 'react';
import './product.css';

const Product = ({ id, name, price, image, addToCart, addToWishlist }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, name, price, image })}>Add to Cart</button>
      <button onClick={() => addToWishlist({ id, name, price, image })}>Add to Wishlist</button>
    </div>
  );
};

export default Product;