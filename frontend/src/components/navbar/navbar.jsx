import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Dropdown } from 'react-bootstrap';

import './navbar.css';

function NavBar() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  if (isMobile) {
    return (
      <nav>
        <ul className="row mobile-nav-links">
          <h1 className="col-4 logo"><a href="/">Bitpost</a></h1>
          <Dropdown className="col-8 drop-down" align="center">
            <Dropdown.Toggle bsPrefix="hamburger-button btn">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <i className="fa fa-bars hamburger-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/market-data">Market Data</Dropdown.Item>
              <Dropdown.Item href="/coin-list">Coin List</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </nav>
    );
  }

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
