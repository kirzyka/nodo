var Schema = global.db.Schema,
    ObjectId = Schema.ObjectId;
 
var User = new Schema({
    username  : String,
    id     	  : Number,
    sex       : String
});

module.exports = function (param) {
	return new Promise(function(resolve, reject) {
		var myModel = global.db.model('users', User);
		myModel.find({}, function (err, items) {
			if(err) { return reject(err); }
			resolve(items); 
		});		
	});
};