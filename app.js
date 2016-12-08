const express = require('express');
var app = express();

var blocks = {
  'Fixed': 'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
};


var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

app.get('/blocks', function(req, res) {
  if (req.query.limit >= 0) {
    res.json(blocks.slice(0, req.query.limit));
  } else {
    res.json(blocks)
  }
});

app.get('/blocks/:name', function(req, res) {
  var description = blocks[req.params.name];
  res.json(description);
});

app.listen(3000, function() {
  console.log('listening on 3000 \n');
});
