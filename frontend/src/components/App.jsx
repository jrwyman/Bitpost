import React from 'react';

import CurrentPrice from './current-price/current-price';
import NewsFeed from './news-feed/news-feed';
import './App.css';

function App() {
  return (
    <div className="App">
      <CurrentPrice />
      <NewsFeed />
      <div className="api-credit-message">
        Powered by
        <a href="https://www.coindesk.com/price/bitcoin"> CoinDesk</a>
      </div>
    </div>
  );
}

export default App;
