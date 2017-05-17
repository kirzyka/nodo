var express = require('express'),
	path = require('path'),
	app = express(),
	mongoose = require('mongoose');
	
// Globals	
global.BASE_PATH = __dirname;	
	
// Settings	
app.set('views', path.join(global.BASE_PATH, '/ui')); 
app.set('view engine', 'pug');	

// Static
app.use(express.static(path.join(global.BASE_PATH, '/ui/dist')));	
// Routes
app.use(require('./app.routes'));

// Run
app.listen(3000, function () {
	console.log('Nodo::Server listening on port 3000!');
});

mongoose.connect('mongodb://localhost:27017/nodo');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var User = new Schema({
    username  : String,
    id     	  : Number,
    sex       : String
});

var myModel = mongoose.model('users', User);
myModel.find({}, function (err, items) {
	console.log(items); 
});