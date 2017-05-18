var express = require('express'),
	router = express.Router(),
	
	apiUserRoute = require('./route/api/user.route');


apiUserRoute(router);


//Pages
router.get('/', function (req, res) {
	res.render('page/index.pug', { title: 'Nodo :: Home Page', message: 'Hello there!'});
});

router.get('/user', function (req, res) {
	res.render('page/user/user.pug', { title: 'Nodo :: User Page', message: 'Hello there!'});
});

router.get('/admin', function (req, res) {
	res.render('page/admin/home/admin.home.pug', { title: 'Nodo :: Admin :: Home Page', message: 'Hello there!'});
});

router.get('/admin/users', function (req, res) {
	res.render('page/admin/users/admin.users.pug', { title: 'Nodo :: Admin :: Users Page', message: 'Hello there!'});
});

module.exports = router;