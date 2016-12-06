const express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

app.get('/blocks', function(req, res) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  res.json(blocks)
});

app.listen(3000);
