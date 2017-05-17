/*globals Vue */
/*eslint-env jquery */
var app,
	users = [],
	count = 4003;

app = new Vue({
	el: '#app',
	data: {
		count: this.count,
		users: this.users
	},
	methods: {
		load: function () {
			console.log('load');
			$.get('/api/users', function (response) {
				this.users = response;
			}.bind(this));
		},
		unload: function () {
			this.users = [];
		}
	},
	created: function() {
		var self = this;

		/*setInterval(function() {
			self.count+=1;
			console.log(self.count);
		}, 1000);*/
	}
});