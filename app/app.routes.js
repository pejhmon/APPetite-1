(function() {
'use strict';
angular
    .module('appetiteApp')
    .config(function($routeProvider) {
        $routeProvider

        //login
        .when('/', {
            templateUrl: 'app/components/login/loginView.html'
//            ,controller: 'sceneController as ctrl'
        })
    
        //register
        .when('/register', {
            templateUrl: 'app/components/register/registerView.html'
//            ,controller: 'sceneController as ctrl'
        })

        //home
        .when('/home', {
            templateUrl: 'app/components/home/homeView.html'
//            ,controller: 'sceneController as ctrl'
        })
        
        //symptoms  
        .when('/symptoms', {
            templateUrl: 'app/components/symptoms/symptomsView.html'
//            ,controller: 'sceneController as ctrl'
        })
        
        //history
        .when('/history', {
            templateUrl: 'app/components/history/historyView.html'
//            ,controller: 'sceneController as ctrl'
        })
        
        //weight
        .when('/weight', {
            templateUrl: 'app/components/weight/weightView.html'
//            ,controller: 'sceneController as ctrl'
        })
        
        //dietician
        .when('/food', {
            templateUrl: 'app/components/food/foodView.html'
//            ,controller: 'sceneController as ctrl'
        });
        
    });
    
}());
    