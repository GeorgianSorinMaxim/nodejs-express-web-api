var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var http = require('http');
var http = require('http');

// MongoDB Connection 
// mongoose.connect('mongodb://localhost/holidayextras');
mongoose.connect('mongodb://YOURDBHERE');

// Load routes
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Set up ejs for templating
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Log every request to the console
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/users', users.index);
app.get('/users/:id', users.show);
app.post('/users', users.create);
app.put('/users', users.update);
app.delete('/users', users.delete);

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Server started on port",  app.get('port'), app.settings.env);
});