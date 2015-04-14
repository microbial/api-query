module.exports = function(req, res, next) {
  req.api = req.api || {};
  req.api.query = req.api.query || [];

  console.log('Server', req.api.server);
  console.log('Query ', req.api.query);

  var appRoot = process.cwd(),
      path  = require('path'),
      data = require(path.join(appRoot, 'data/example.json'));

  req.api.query.forEach(function(filterKey) {
    if(data[filterKey]) {
      data = data[filterKey];
    }
  });

  req.api.data = data;
  next();
};