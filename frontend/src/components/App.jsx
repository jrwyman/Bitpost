import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from './navbar/navbar';
import NewsFeed from './news-feed/news-feed';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>NOTHING</div>
        </Route>
        <Route exact path="/market-data" component={NewsFeed}>
          <NewsFeed />
        </Route>
      </Switch>
      <div className="text-center">
        Powered by
        <a href="https://www.coindesk.com/price/bitcoin"> CoinDesk</a>
      </div>
    </Router>
  );
}

export default App;
