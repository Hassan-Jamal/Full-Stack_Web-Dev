import React from 'react';
import './navbar.css';

const Navbar = ({ wishlistCount, cartCount }) => {
  return (
    <nav className="navbar">
      <h1>🛒 Swag Shop</h1>
      <div className="nav-icons">
        <span>Wishlist ({wishlistCount})</span>
        <span>🛍 Cart ({cartCount})</span>
      </div>
    </nav>
  );
};

export default Navbar;