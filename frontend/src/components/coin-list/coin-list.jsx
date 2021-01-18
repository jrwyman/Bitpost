import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';

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
        per_page: 100,
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
      <div className="row coin-headers">
        <div className="col coin-header">Coin</div>
        <div className="col price-header">Price</div>
        <div className="col market-cap-header">Market Cap</div>
      </div>
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
              <div className="col">{numeral(coin.current_price).format('$0,0[.]00[0000]')}</div>
              <div className="col">{numeral(coin.market_cap).format('$0,0[.]00')}</div>
            </div>
          ))
        }
      </ol>
    </div>
  );
}

export default CoinList;
