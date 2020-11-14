const express = require('express');
const bodyParser = require('body-parser');
const database = require('../db/controller.js');
const PORT = 3001;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/api/photo-carousel/:id', database.getPhotos);

app.get('/api/photo-carousel/favorites/:userId', database.getFavorites);

//For creating a new favorite list
app.post('/api/photo-carousel/favorites', database.postFavorite);

//For updating a favorite
app.put('/api/photo-carousel/favorites', database.updateFavorite);

app.listen(PORT, ()=>{ console.log('server is listening at port ', PORT); });