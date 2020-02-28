angular.module(messages.APP_NAME)
.service('loginService', function() {
	console.log("Login service instantiated");

	var users = [{ id: 1, username: 'john', password: '123' }];

	this.validate = function(user) {
		var isValid = false;
		users.map( usr => {
			if(usr.username == user.username && usr.password == user.password) {
				isValid = true;
			}
		});
		return isValid;
	}
});

