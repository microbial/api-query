module.exports = function(req, res, next) {
  var pathData = req.url.split('?'),
    apiConfig = pathData[1] || '',
    apiServer = apiConfig.split('url=').filter(function(cfg) {return cfg;}),
    apiUrl = pathData[0].split('/'),
    apiQuery = apiUrl.filter(function(apiPath) {return apiPath;});

  req.api = req.api || {};
  req.api.server = apiServer;
  req.api.query = apiQuery;
  next();
};