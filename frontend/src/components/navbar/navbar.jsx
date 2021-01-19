import React from 'react';
import {
  Link,
} from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav>
      <ul className="row nav-links">
        <h1 className="col-4 logo"><a href="/">Bitpost</a></h1>
        <li className="col-1 link">
          <Link to="/">Home</Link>
        </li>
        <li className="col-1 link">
          <Link to="/market-data">Market Data</Link>
        </li>
        <li className="col-1 link">
          <Link to="/coin-list">Coin List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
