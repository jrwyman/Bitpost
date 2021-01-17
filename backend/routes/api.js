const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/articles', async (req, res) => {
  const articlesResponse = await axios({
    method: 'get',
    url: 'http://api.datanews.io/v1/news',
    headers: {
      'x-api-key': '0955zkguk3uqog56tt8o43ulu',
    },
    params: {
      size: 10,
      sortBy: 'date',
      language: 'en',
      from: req.query.from,
      to: req.query.to,
    },
  });

  res.json(articlesResponse.data);
});

module.exports = router;