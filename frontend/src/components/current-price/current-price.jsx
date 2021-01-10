import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './current-price.css';

function CurrentPrice() {
  const [price, setPrice] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      setPrice(response.data.bpi.USD.rate);
      setTime(response.data.time.updated);
    }
    fetchData();
  });

  return (
    <div className="current-price-page">
      <div className="current-price-message">
        {`The current price of Bitcoin as of ${time}`}
      </div>
      <div className="current-price">{price}</div>
    </div>
  );
}

export default CurrentPrice;
