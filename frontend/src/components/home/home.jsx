import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import logo from './homepagelogo.png';
import './home.css';

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  return (
    <div className="container home-page">
      <div className="row">
        <div className="col home-text">
          <h1 className="home-header">Reliable Market Data</h1>
          <h3 className="home-subheader">Free access to charts and news articles</h3>
          <p className="home-paragraph">Bitpost gives you the freedom to analyze bitcoin as well as dozens of other top cryptocurrencies with the click of a button.</p>
          <Link to="/market-data" className="btn btn-primary home-button">Start Here</Link>
        </div>
        <div className={isMobile ? 'row home-logo' : 'col home-logo'}>
          <img src={logo} alt="home-logo" />
        </div>

      </div>
    </div>
  );
}

export default Home;
