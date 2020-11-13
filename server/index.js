const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/connection.js');
const PORT = 3001;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/api/photo-carousel/:id', (req, res) => {
  console.log('received GET request');
  db.PhotoCarousel.find({listingId: req.params.id}, (err, results) => {
    if (err) {
      res.statusCode(404);
      res.end();
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, ()=>{ console.log('server is listening at port ', PORT); });