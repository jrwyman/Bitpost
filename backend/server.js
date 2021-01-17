const path = require('path');
const express = require('express');
const app = express();

const api = require('./routes/api');

const PORT = (process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api', api);

app.get('/*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Vary', 'Origin');
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
