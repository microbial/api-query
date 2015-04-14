var restify = require('restify'),
		app = restify.createServer(),
		resolveQuery = require('./server/middleware/resolve_query'),
		retrieveLocalData = require('./server/middleware/retrieve_local_data');

app.use(resolveQuery);
app.use(retrieveLocalData);

//All URLs are treated as data filters
app.get(/[A-Za-z0-9\/\-]/g, function(req, res, next) {
	res.json(req.api.data);
	next();
});

app.listen(9696, function() {
	console.log('%s listening at %s', app.name, app.url);
});
