import React from 'react';
import './wishlist.css';

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  const totalPrice = wishlistItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="wishlist-container">
      <h2>Wishlist ❤️</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} className="wishlist-image" />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
