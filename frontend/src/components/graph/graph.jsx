import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import './graph.css';

function Graph({ data }) {
  const isMobile = useMediaQuery({ query: '(max-width:400px)' });

  return (
    <div className="container graph" align="center">
      <ResponsiveContainer width="99%" height={isMobile ? 200 : 400}>
        <LineChart
          width={200}
          height={200}
          data={data}
          margin={{
            top: 5, right: 20, left: 10, bottom: 5,
          }}
        >
          <XAxis dataKey="priceDate" />
          <YAxis dataKey="price" />
          <Tooltip />
          <CartesianGrid stroke="#E4E4E4" />
          <Line type="monotone" dataKey="price" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Graph.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Graph;
