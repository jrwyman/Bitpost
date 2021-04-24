import React from 'react';
// import { Link } from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav className="container-fluid navbar navbar-default navbar-light navbar-expand-md sticky-top navbar-scroll-point">

      <a href="/" className="navbar-brand"><h1 className="logo">Bitpost</h1></a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/market-data">Market Data</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/coin-list">Coin List</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default NavBar;
