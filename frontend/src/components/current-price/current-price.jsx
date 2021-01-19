import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import numeral from 'numeral';
import axios from 'axios';

import './current-price.css';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

function CurrentPrice({ coin }) {
  const [price, setPrice] = useState(null);
  const [time, setTime] = useState(null);

  async function fetchData() {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
    setPrice(response.data.market_data.current_price.usd);
    setTime(response.data.last_updated);
  }

  useEffect(() => {
    fetchData();
  }, [coin]);

  return (
    <div className="container-fluid current-price-page" align="center">
      <h2 className="text-center">
        {`The current price of ${coin} as of ${dayjs(time).format('L LT')}`}
      </h2>
      <h1 className="current-price">{numeral(price).format('$0,0[.]00')}</h1>
    </div>
  );
}

CurrentPrice.propTypes = {
  coin: PropTypes.string.isRequired,
};

export default CurrentPrice;
