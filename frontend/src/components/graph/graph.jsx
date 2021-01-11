import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

function Graph({ data }) {
  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5, right: 20, left: 10, bottom: 5,
      }}
    >
      <XAxis dataKey="priceDate" />
      <YAxis dataKey="price" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="price" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
}

Graph.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Graph;
