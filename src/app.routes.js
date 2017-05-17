var express = require('express'),
	router = express.Router(),
	
	apiUserRoute = require('./route/api/user.route');


apiUserRoute(router);


//Pages
router.get('/', function (req, res) {
	res.render('page/index', { title: 'Nodo :: Home Page', message: 'Hello there!'});
});

router.get('/user', function (req, res) {
	res.render('page/user/user', { title: 'Nodo :: User Page', message: 'Hello there!'});
});

module.exports = router;