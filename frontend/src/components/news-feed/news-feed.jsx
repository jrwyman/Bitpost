/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable quote-props */
import React, { useState } from 'react';
import axios from 'axios';

import Graph from '../graph/graph';
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
    from: '2018-01-01',
    to: '2019-01-01',
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
    const token = '0955zkguk3uqog56tt8o43ulu';
    const articlesUrl = `http://api.datanews.io/v1/news?q=bitcoin&&from=${dateRange.from}&to=${dateRange.to}&size=25&sortBy=date&language=en&apiKey=${token}`;
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

  return (
    <div className="news-feed-page">
      <input type="text" value={dateRange.from} onChange={updateFrom} placeholder="YYYY-MM-DD" />
      <input type="text" value={dateRange.to} onChange={updateTo} placeholder="YYYY-MM-DD" />
      <button type="submit" onClick={fetchData}>Get Data</button>
      <Graph data={prices.hits} />
      <ol className="news-article-list">
        {
          Object.keys(articles.hits).map((key) => (
            <div>
              <p>{articles.hits[key].pubDate}</p>
              <p>
                <a href={articles.hits[key].url} target="_blank" rel="noreferrer">{articles.hits[key].title}</a>
              </p>
              <p>{articles.hits[key].content}</p>
            </div>
          ))
        }
      </ol>
    </div>
  );
}

export default NewsFeed;
