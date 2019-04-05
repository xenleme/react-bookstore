import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ numItems, total }) => {
  return (
    <header className="header row">
      <Link to="/">
        <div href="#" className="logo text-dark">bookstore</div>
      </Link>
      <Link to="/cart">
        <div href="#" className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
}

export default Header;
