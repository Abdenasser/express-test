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

app.get('/blocks/:name', function(req, res) {
  var name = req.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
  var description = blocks[block];
  if (!description) {
    res.status(404).json(`No description found for ${req.params.name}`);
  } else {
    res.json(description);
  }
});

app.get('/locations/:name', function(req, res) {
  var name = req.params.name;
  var location = name[0].toUpperCase() + name.slice(1).toLowerCase();
  var description = locations[location];
  if (!description) {
    res.status(404).json(`No description found for ${req.params.name}`);
  } else {
    res.json(description);
  }
});

app.listen(3000, function() {
  console.log('listening on 3000 \n');
});
