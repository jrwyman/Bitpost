import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

import './current-price.css';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

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
    <div className="container-fluid current-price-page" align="center">
      <h2 className="text-center">
        {`The current price of Bitcoin as of ${dayjs(time).format('L LT')}`}
      </h2>
      <h1 className="current-price">{price}</h1>
    </div>
  );
}

export default CurrentPrice;
