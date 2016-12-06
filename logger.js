module.exports = function (req, res, next) {
  var start = +new Date();
  var stream = process.stdout;

  next();
}
