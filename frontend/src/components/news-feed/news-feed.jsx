import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

import CurrentPrice from '../current-price/current-price';
import Graph from '../graph/graph';
import Articles from '../articles/articles';
import './news-feed.css';

function NewsFeed() {
  const [coin, setCoin] = useState('bitcoin');

  const [articles, setArticles] = useState({
    numResults: 0,
    hits: [],
  });

  const [prices, setPrices] = useState({
    numResults: 0,
    hits: [],
  });

  const [dateRange, setDateRange] = useState({
    from: '2020-01-01',
    to: '2021-01-01',
  });

  function parseData(data) {
    const response = {
      numResults: 0,
      hits: [],
    };
    data.prices.forEach((pair) => {
      response.hits.push({ priceDate: dayjs(pair[0]).format('L'), price: pair[1] });
    });
    response.numResults = data.prices.length;
    return response;
  }

  async function fetchData() {
    const articlesResponse = async () => {
      const response = await axios({
        method: 'get',
        url: '/api/articles',
        params: {
          q: coin,
          from: dateRange.from,
          to: dateRange.to,
        },
      });
      return response;
    };
    const result = await articlesResponse();
    setArticles(result.data);

    const pricesResponse = await axios({
      method: 'get',
      url: `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd`,
      params: {
        from: dayjs(dateRange.from).unix(),
        to: dayjs(dateRange.to).unix(),
      },
    });
    setPrices(parseData(pricesResponse.data));
  }

  function updateFrom(e) {
    setDateRange({
      ...dateRange,
      from: String(e.target.value),
    });
  }

  function updateTo(e) {
    setDateRange({
      ...dateRange,
      to: String(e.target.value),
    });
  }

  function renderDateBox() {
    return (
      <div className="container date-box">
        <div className="row">
          <div className="col form-group">
            <label htmlFor="fromDate">
              {'Start Date: '}
              <input id="fromDate" type="date" value={dateRange.from} onChange={updateFrom} placeholder="YYYY-MM-DD" />
            </label>
          </div>
          <div className="col form-group">
            <label htmlFor="toDate">
              {'End Date: '}
              <input id="toDate" type="date" value={dateRange.to} onChange={updateTo} placeholder="YYYY-MM-DD" />
            </label>
          </div>
        </div>
      </div>
    );
  }

  function updateSelect(e) {
    setCoin(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container news-feed-page" align="center">
      <div className="row current-price">
        <CurrentPrice coin={coin} />
      </div>
      <div className="row" align="center">
        <div className="col">
          {renderDateBox()}
          <Graph data={prices.hits} />
          <select className="coin-select" onChange={updateSelect}>
            <option value="bitcoin">Bitcoin (BTC)</option>
            <option value="ethereum">Ethereum (ETH)</option>
            <option value="bitcoin-cash">Bitcoin Cash (BCH)</option>
            <option value="stellar">Stellar (XLM)</option>
          </select>
          <button className="date-box-submit" type="submit" onClick={fetchData}>Get Market Data</button>
        </div>
        <div className="col">
          <Articles coin={coin} articles={articles} />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
