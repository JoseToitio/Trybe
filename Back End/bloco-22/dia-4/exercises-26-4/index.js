const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.get('/ping', (req, res) => {
  res.json({ "message": "pong"})
});

app.listen(3001, () => console.log('porta 3001'));