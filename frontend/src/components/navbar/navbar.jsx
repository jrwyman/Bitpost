import React from 'react';
import {
  Link,
} from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav>
      <ul className="row">
        <li className="col-1 link">
          <Link to="/">Home</Link>
        </li>
        <li className="col-1 link">
          <Link to="/market-data">Market Data</Link>
        </li>
        <li className="col-1 link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
