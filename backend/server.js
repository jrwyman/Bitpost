const path = require('path');
const express = require('express');
const app = express();

const api = require('./routes/api');

const PORT = (process.env.PORT || 5000);

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
