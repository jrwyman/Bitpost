import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from './navbar/navbar';
import NewsFeed from './news-feed/news-feed';
import CoinList from './coin-list/coin-list';
import Home from './home/home';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/market-data" component={NewsFeed} />
          <Route exact path="/coin-list" component={CoinList} />
        </Switch>
      </div>
      <div className="text-center footer">
        {'Powered by '}
        <a href="https://www.coingecko.com/">CoinGecko </a>
        {'and '}
        <a href="https://datanews.io/">Datanews.io</a>
      </div>
    </Router>
  );
}

export default App;
