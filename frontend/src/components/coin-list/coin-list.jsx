/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './coin-list.css';

function CoinList() {
  const [coinList, setCoinList] = useState({
    numResults: 0,
    hits: [],
  });

  function parseData(data) {
    const response = {
      numResults: data.length,
      hits: data,
    };
    return response;
  }

  async function fetchData() {
    const coinListResponse = await axios({
      method: 'get',
      url: ' https://api.coingecko.com/api/v3/coins/markets',
      headers: null,
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 15,
        page: 1,
        sparkline: false,
      },
    });
    setCoinList(parseData(coinListResponse.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container coin-list">
      <ol>
        {
          coinList.hits.map((coin) => (
            <div className="row coin">
              <div className="col">
                <div className="row">
                  <div className="col-1 coin-name">{coin.market_cap_rank}</div>
                  <img className="col-1 coin-image" src={coin.image} alt="logo" />
                  <div className="col">{coin.name}</div>
                </div>
              </div>
              <div className="col">{`Price: ${coin.current_price}`}</div>
              <div className="col">{`Market Cap: ${coin.market_cap}`}</div>
            </div>
          ))
        }
      </ol>
    </div>
  );
}

export default CoinList;
