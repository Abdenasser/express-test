const express = require('express');
var app = express();

var blocks = {
  'Fixed': 'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
};

var locations = {
  'Fixed': 'First floor',
  'Movable': 'Second floor',
  'Rotating': 'Penthouse'
};

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

app.param('name', function(req, res, next) {
  var name = req.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

  req.blockName = block;

  next();
});

app.get('/blocks', function(req, res) {
    res.json(Object.keys(blocks));
});

app.get('/blocks/:name', function(req, res) {
  var description = blocks[req.blockName];
  if (!description) {
    res.status(404).json(`No description found for ${req.params.name}`);
  } else {
    res.json(description);
  }
});

app.get('/locations/:name', function(req, res) {
  var description = locations[req.blockName];
  if (!description) {
    res.status(404).json(`No description found for ${req.params.name}`);
  } else {
    res.json(description);
  }
});

app.listen(3000, function() {
  console.log('listening on 3000 \n');
});
