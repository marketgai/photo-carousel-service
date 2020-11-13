const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/connection.js');
const axio = require('axios');
const PORT = 3001;
const app = express();

//To be used once I create static files
// app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api/photo-carousel/:id', (req, res) => {
  console.log('received GET request');
  res.end();
});

app.listen(PORT, ()=>{ console.log('server is listening at port ', PORT); });