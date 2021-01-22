const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = require('../keys');

router.get('/articles', async (req, res) => {
  const articlesResponse = await axios({
    method: 'get',
    url: 'http://api.datanews.io/v1/news',
    headers: {
      'x-api-key': apiKey,
    },
    params: {
      q: req.query.q,
      size: 100,
      sortBy: 'relevance',
      language: 'en',
      from: req.query.from,
      to: req.query.to,
    },
  });

  res.json(articlesResponse.data);
});

module.exports = router;