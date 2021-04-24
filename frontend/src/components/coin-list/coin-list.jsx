import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import numeral from 'numeral';

import './coin-list.css';

function CoinList() {
  // const isTiny = useMediaQuery({ query: '(max-width: 345px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  // const isTablet = useMediaQuery({ query: '(max-width: 991px)' });

  const [coinList, setCoinList] = useState({
    numResults: 0,
    hits: [],
  });

  function parseData(data) {
    console.log(coinList); // REMOVE ME
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
    <div className="coin-list2">
      <div className="container coin-list">
        <div className="row coin-headers" align="left">
          <div className="col">Coin</div>
          <div className="col">Price</div>
          <div className="col">Market Cap</div>
        </div>
        <div className="row coin-data" align="left">
          {
            coinList.hits.map((coin) => (
              <div className="row coin">
                <div className="col">
                  <div className="row">
                    <div className="col-1 coin-rank">{coin.market_cap_rank}</div>
                    <img className="col-1 coin-image" src={coin.image} alt="logo" />
                    <div className="col">{isMobile ? coin.symbol.toUpperCase() : coin.name}</div>
                  </div>
                </div>
                <div className="col">{numeral(coin.current_price).format('$0,0[.]00[0000]')}</div>
                <div className="col">{isMobile ? numeral(coin.market_cap).format('($ 0.00 a)') : numeral(coin.market_cap).format('$0,0[.]00')}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    // <div className={isTiny ? 'container mobile-coin-list' : 'container coin-list'}>
    //   <div className="row coin-headers">
    //     <div className="col coin-header">Coin</div>
    //     <div className="col price-header">Price</div>
    //     <div className="col market-cap-header">Market Cap</div>
    //   </div>
    //   <ol>
    //     {
    //       coinList.hits.map((coin) => (
    //         <div className="row coin">
    //           <div className="col">
    //             <div className="row">
    //               {
    //                 isMobile ? <div className="mobile-coin-rank" />
    //                   : <div className="col-1 coin-rank">{coin.market_cap_rank}</div>
    //               }
    //               {
    //                 isTablet ? <div className="col-1" />
    //                   : <img className="col-1 coin-image" src={coin.image} alt="logo" />
    //               }
    //               <div className="col-sm">{isMobile ? coin.symbol.toUpperCase()
    // : coin.name}</div>
    //             </div>
    //           </div>
    //           <div className="col">{numeral(coin.current_price).format('$0,0[.]00[0000]')}</div>
    //           <div className="col">{isMobile ? numeral(coin.market_cap).format('(
    // $ 0.00 a)') : numeral(coin.market_cap).format('$0,0[.]00')}</div>
    //         </div>
    //       ))
    //     }
    //   </ol>
    // </div>
  );
}

export default CoinList;
