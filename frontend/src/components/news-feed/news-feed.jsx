import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Graph from '../graph/graph';
import Articles from '../articles/articles';
import './news-feed.css';

function NewsFeed() {
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
    Object.keys(data.bpi).forEach((date) => {
      response.hits.push({ priceDate: date, price: data.bpi[date] });
    });
    response.numResults = Object.keys(data.bpi).length;
    return response;
  }

  async function fetchData() {
    const articlesUrl = `http://api.datanews.io/v1/news?q=bitcoin&&from=${dateRange.from}&to=${dateRange.to}&size=25&sortBy=date&language=en&apiKey=0955zkguk3uqog56tt8o43ulu`;
    const pricesUrl = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${dateRange.from}&end=${dateRange.to}`;
    const articlesResponse = await axios.get(articlesUrl);
    setArticles(articlesResponse.data);
    const pricesResponse = await axios.get(pricesUrl);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container news-feed-page" align="center">
      <div className="row" align="center">
        <div className="col">
          {renderDateBox()}
          <Graph data={prices.hits} />
          <button className="date-box-submit" type="submit" onClick={fetchData}>Get Market Data</button>
        </div>
        <div className="col">
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
