angular.module(messages.APP_NAME)
.service('homeService', function() {
	console.log("Home service instantiated");

    var formData;

	this.getData = function($http) {
        return $http.get('http://dummy.restapiexample.com/api/v1/employees')
            .then( 
                function(res) {
                    formData = res.data;
                    return res.data;
                },
                function(error) {
                    console.log(error);
                },
            );
        ;
    }
});

