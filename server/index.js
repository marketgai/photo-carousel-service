const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/connection.js');
const PORT = 3001;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/api/photo-carousel/:id', (req, res) => {
  db.PhotoCarousel.find({listingId: req.params.id}, (err, results) => {
    if (err) {
      res.statusCode(404);
      res.end();
    } else {
      res.json(results);
    }
  });
});

app.get('/api/photo-carousel/favorites/:userId', (req, res) => {
  db.UserFavorite.find({userId: req.params.userId}, (err, results) => {
    if (err) {
      res.statusCode(404);
      res.end();
    } else {
      res.json(results);
    }
  });
});

//For creating a new favorite list
app.post('/api/photo-carousel/favorites', (req, res) => {
  db.UserFavorite.create(req.body, (err, results) => {
    if (err) {
      res.statusCode(400);
      res.end();
    } else {
      res.json(results);
    }
  });
});

//For updating a favorite
app.put('/api/photo-carousel/favorites', (req, res) => {
  const {userId, listName, favoriteLists} = req.body;
  db.UserFavorite.updateOne({userId: userId, listName: listName}, req.body, (err, results) => {
    if (err) {
      res.statusCode(400);
      res.end();
    } else {
      res.json(req.body);
    }
  });
});

app.listen(PORT, ()=>{ console.log('server is listening at port ', PORT); });