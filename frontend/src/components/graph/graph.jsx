import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import './graph.css';

function Graph({ data }) {
  // const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  // const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  return (
    <div className="container graph">
      <LineChart
        width={isMobile ? 200 : 400}
        height={isMobile ? 200 : 400}
        data={data}
        margin={{
          top: 5, right: 20, left: 10, bottom: 5,
        }}
      >
        <XAxis dataKey="priceDate" />
        <YAxis dataKey="price" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="price" dot={false} />
      </LineChart>
    </div>
  );
}

Graph.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Graph;
