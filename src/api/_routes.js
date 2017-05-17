var express = require('express'),
	router = express.Router();

router.get('/api/users', function (req, res) {
	res.send([
		{username: 'user1', id: 1, sex: 'male'},
		{username: 'user2', id: 2, sex: 'female'},
		{username: 'user3', id: 3, sex: 'female'}
	]);
});

module.exports = router;