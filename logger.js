module.exports = function (req, res, next) {
  var start = +new Date();
  var stream = process.stdout;
  var url = req.url;
  var method = req.method;

  next();
}
