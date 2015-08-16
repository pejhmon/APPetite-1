(function() {
'use strict';
angular
    .module('appetiteApp')
    .config(function($routeProvider, $httpProvider) {
        $routeProvider

            //login
            .when('/', {
                templateUrl: 'app/components/login/loginView.html',
                controller: 'loginController as ctrl'
            })

            //register
            .when('/register', {
                templateUrl: 'app/components/register/registerView.html',
                controller: 'registerController as ctrl'
            })

            //home
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController as ctrl'
            })

            //symptoms  
            .when('/symptoms', {
                templateUrl: 'app/components/symptoms/symptomsView.html',
                controller: 'symptomsController as ctrl'
            })

            //history
            .when('/history', {
                templateUrl: 'app/components/history/historyView.html',
                controller: 'historyController as ctrl'
            })

            //weight
            .when('/weight', {
                templateUrl: 'app/components/symptoms/symptomsView.html',
                controller: 'weightController as ctrl'
            })

            //dietician
            .when('/food', {
                templateUrl: 'app/components/food/foodView.html',
                controller: 'foodController as ctrl'
            });
       
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
    
}());
    