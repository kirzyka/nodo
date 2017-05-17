var express = require('express'),
	path = require('path'),
	app = express(),
	
	route = require('./api/_routes');
	
	
app.use(express.static(path.join(__dirname, '/ui/dist')));	

app.set('views', path.join(__dirname, '/ui')); 
app.set('view engine', 'pug');	

//Routes
app.use(require('./api/_routes'));

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
	console.log('Nodo::Server listening on port 3000!');
});

console.log('root', __dirname);