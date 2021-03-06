angular.module(messages.APP_NAME)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                cache: false,
                url: '/login',
                templateUrl: 'templates/loginPage.html',
                controller: 'loginController'
            })
            .state('home', {
                cache: false,
                url: '/home/:username',
                templateUrl: 'templates/homePage.html',
                controller: 'homeController'
            })
            .state('form', {
                cache: false,
                url: '/form',
                templateUrl: 'templates/formPage.html',
                controller: 'formController'
            })
        
        $urlRouterProvider.otherwise('/login');
    })