const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req)
  res.send({ hi: 'there' })
});

app.listen(5000);
