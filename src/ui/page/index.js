/*globals Vue */

// For 404 page
var notFound = {
   // You can use also use template path (Thanks to @jcerdan)
   // path : '/path/to/component.html'
   template: '<h1>Not Found</h1>'
};

var c1 = {
   // You can use also use template path (Thanks to @jcerdan)
   // path : '/path/to/component.html'
   template: '<h1>Component1</h1>'
};

var c2 = {
   // You can use also use template path (Thanks to @jcerdan)
   // path : '/path/to/component.html'
   template: '<h1>Component2</h1>'
};

var c3 = Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
});
	
// Tell Vue to use view-router
Vue.use(VueRouter);

// Router options
var router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '*', component: notFound },
    { path: '/', component: c1 },
    { path: '/users', component: c2 },
    { path: '/posts', component: c3 }
  ],
});

var app = new Vue({
  router: router
}).$mount('#app');
/*
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
	}
});*/