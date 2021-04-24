import React, { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import dayjs from 'dayjs';

import CurrentPrice from '../current-price/current-price';
import Graph from '../graph/graph';
import Articles from '../articles/articles';
import './news-feed.css';

function NewsFeed() {
  // const isTablet = useMediaQuery({ query: '(max-width: 991px)' });

  const [sortMethod, setSortMethod] = useState('relevance');

  const [coinList, setCoinList] = useState({
    numResults: 0,
    hits: [],
  });

  const [coin, setCoin] = useState('bitcoin');
  const [symbol, setSymbol] = useState('BTC');

  const [articles, setArticles] = useState({
    numResults: 0,
    hits: [],
  });

  const [prices, setPrices] = useState({
    numResults: 0,
    hits: [],
  });

  const [dateRange, setDateRange] = useState({
    from: dayjs(Date()).startOf('month').format('YYYY-MM-DD'),
    to: dayjs(Date()).format('YYYY-MM-DD'),
  });

  function parseCoinListData(data) {
    const response = {
      numResults: data.length,
      hits: data,
    };
    return response;
  }

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
    setCoinList(parseCoinListData(coinListResponse.data));

    const articlesResponse = async () => {
      const response = await axios({
        method: 'get',
        url: '/api/articles',
        params: {
          sortBy: sortMethod,
          q: `${coin} ${symbol}`,
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
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Start Date</span>
                </div>
                <input id="fromDate" type="date" value={dateRange.from} onChange={updateFrom} className="form-control" aria-describedby="basic-addon1" />
              </div>

            </label>
          </div>
          <div className="col form-group">
            <label htmlFor="toDate">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">End Date</span>
                </div>
                <input id="toDate" type="date" value={dateRange.to} onChange={updateTo} className="form-control" aria-describedby="basic-addon1" />
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }

  function updateSelect(e) {
    const params = e.target.value.split(',');
    setCoin(params[0]);
    setSymbol(params[1]);
  }

  useEffect(() => {
    fetchData();
  }, [coin, sortMethod]);

  return (
    <div className="container-fluid news-feed-page">
      <CurrentPrice coin={coin} />
      <div className="row" align="center">
        <div className="col-lg-6">
          <div className="container Graph">
            <h2>Price Data</h2>
            {renderDateBox()}
            <Graph data={prices.hits} />
            <div className="input-group mb-3 coin-select justify-content-center">
              <select className="form-select coin-select" id="inputGroupSelect02" onChange={updateSelect}>
                {
                  coinList.hits.map((listCoin) => (
                    <option key={listCoin.id} value={[listCoin.id, listCoin.symbol]}>{`${listCoin.name} (${listCoin.symbol.toUpperCase()})`}</option>
                  ))
                }
              </select>
              <div className="input-group-prepend">
                <div className="input-group-text" htmlFor="inputGroupSelect02">Coin</div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={fetchData}>Get Market Data</button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="container Articles">
            <h2>News</h2>
            <div className="input-group mb-3 sortBy-select justify-content-center">
              <select className="form-select articles-select" id="inputGroupSelect01" onChange={(e) => setSortMethod(e.target.value)}>
                <option selected>Sort By...</option>
                <option value="relevance">Sort By Relevance</option>
                <option value="date">Sort By Date</option>
              </select>
              <div className="input-group-append">
                <div className="input-group-text" htmlFor="inputGroupSelect01">Filter</div>
              </div>
            </div>
            <Articles coin={coin} articles={articles} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
