import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="link-container">
          <img src="/Agro-Fast_plain.svg" alt="Logo" className="logo-image" />
          <h2 className="logo-text">Agro-Fast</h2>
        </Link>
        <Link to="/carrito" className="cart-link">
          <img src="https://static.vecteezy.com/system/resources/previews/016/314/413/non_2x/shopping-cart-free-png.png" alt="Carrito" className="cart-icon" />
        </Link>
      </div>
    </header>
  );
}

 
export default Header;
