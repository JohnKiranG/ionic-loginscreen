angular.module(messages.APP_NAME)
.controller('loginController', ['$scope', '$state', 'loginService', function($scope, $state, loginService) {
    $scope.user = {};

    $scope.validate = function(user) {
        
        var isValid = loginService.validate(user);

        if(isValid) {
            $state.go('home', { username: user.username});
        } else {
            alert("Not valid");
        }
    }

}]);

