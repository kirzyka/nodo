var getUserCmd = require(global.BASE_PATH + '/command/user/getUsers.cmd');

module.exports = function (router) {
    
    router.get('/api/users', function (req, res) {
    	res.send(getUserCmd(req));
    });
    
};