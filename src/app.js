var express = require('express'),
	path = require('path'),
	app = express();
	
	
app.use(express.static(path.join(__dirname, '/ui/js')));	

app.set('views', path.join(__dirname, '/ui/views')); 
app.set('view engine', 'pug');	


app.get('/api/users', function (req, res) {
	res.send([
		{username: 'user1', id: 1, sex: 'male'},
		{username: 'user2', id: 2, sex: 'female'},
		{username: 'user3', id: 3, sex: 'female'}
	]);
});

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

console.log('root', __dirname);