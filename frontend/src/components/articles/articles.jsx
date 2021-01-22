import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import './articles.css';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

function Articles({ articles }) {
  return (
    <ol className="news-article-list">
      {
        Object.keys(articles.hits).map((key) => (
          <div key={key} className="news-article">
            <p>
              <a href={articles.hits[key].url} target="_blank" rel="noreferrer">{articles.hits[key].title}</a>
            </p>
            <p>{dayjs(articles.hits[key].pubDate).format('L LT')}</p>
            <p>{articles.hits[key].content}</p>
          </div>
        ))
      }
    </ol>
  );
}

Articles.propTypes = {
  articles: PropTypes.instanceOf(Object).isRequired,
};

export default Articles;
