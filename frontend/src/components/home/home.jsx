import React from 'react';

import logo from './homepagelogo.png';
import './home.css';

function Home() {
  return (
    <div className="container-fluid home-page">
      <div className="row w-100">
        <div className="col-md-6 home-text" align="left">
          <h1 className="home-header">Reliable Market Data</h1>
          <h3 className="home-subheader">Free access to charts and news articles</h3>
          <p className="home-paragraph">Bitpost gives you the freedom to analyze bitcoin as well as dozens of other top cryptocurrencies with the click of a button.</p>
          <a href="/market-data">
            <button className="btn btn-primary home-button" type="button">Start Here</button>
          </a>
        </div>
        <div className="col-md-6 home-logo" align="center">
          <img className="home-image" src={logo} alt="home-logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
