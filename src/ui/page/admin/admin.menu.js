/*globals Vue */
var p = new Vue({
	el: '#admin_menu',
	data: {
		activeItem: 0
	},
	methods: {
		sw: function(index) {
			console.log(index);
			this.activeItem = index;
		}
	}
});