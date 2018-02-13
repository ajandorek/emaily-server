const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ hey: 'We are up and running!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server up on PORT 3000');
});