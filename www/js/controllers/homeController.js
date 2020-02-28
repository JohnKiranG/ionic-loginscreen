angular.module(messages.APP_NAME)
.controller('homeController', ['$scope', '$state', '$stateParams', '$http', 'homeService', function($scope, $state, $stateParams, $http, homeService) {

    $scope.username = $stateParams.username;

    $scope.employeeList = [];

    $scope.getData = function() {

        homeService.getData($http).then(
            function(data) {
                $scope.employeeList = data.data;
            },
            function(error) {
                console.log(error);
            }
        );
    }

    $scope.getData();
}]);