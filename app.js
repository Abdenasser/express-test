const express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

app.get('/blocks', function(req, res) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  if (req.query.limit >= 0) {
    res.json(blocks.slice(0, req.query.limit));
  } else {
    res.json(blocks)
  }
});

app.listen(3000, function() {
  console.log('listening on 3000 \n');
});
