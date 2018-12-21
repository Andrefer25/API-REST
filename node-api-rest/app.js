var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose')
    cors = require('cors'); 

app.configure(function () {
  app.use(cors())
  app.use(express.bodyParser()); //con bodyParser permitimmos que pueda parsear JSON
  app.use(express.methodOverride()); //methodOverride nos permite implementar y personalizar metodos HTTP
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

routes = require('./routes/tvshows')(app);

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});