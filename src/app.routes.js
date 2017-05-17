var express = require('express'),
	router = express.Router(),
	
	apiUserRoute = require('./route/api/user.route');


apiUserRoute(router);


//Pages
router.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

module.exports = router;