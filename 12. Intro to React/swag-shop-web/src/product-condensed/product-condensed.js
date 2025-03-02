import React from 'react';
import './product-condensed.css';

function ProductCondensed({ name, price, image }) {
  return (
    <div className="product-condensed">
      <img src={image} alt={name} className="product-condensed-image" />
      <div className="product-condensed-details">
        <p>{name}</p>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCondensed;
