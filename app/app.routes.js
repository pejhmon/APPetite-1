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
                controller: 'homeController as ctrl',
                resolve: {'pullModelData': function(pullModel){ 
                    return fooodModel.tufmpromise;
                    }
                }
            })

            //symptoms  
            .when('/symptoms', {
                templateUrl: 'app/components/symptoms/symptomsView.html',
                controller: 'symptomsController as ctrl',
                resolve: {'pullModelData': function(pullModel){ 
                    return fooodModel.slpromise;
                    }
                }
            })

            //history
            .when('/history', {
                templateUrl: 'app/components/history/historyView.html',
                controller: 'historyController as ctrl',
                resolve: {'pullModelData': function(pullModel){ 
                    return fooodModel.ufmpromise;
                    return fooodModel.urmpromise;
                    return fooodModel.fuwmpromise;
                    return fooodModel.usmpromise;
                    }
                }
            })

            //weight
            .when('/weight', {
                templateUrl: 'app/components/symptoms/symptomsView.html',
                controller: 'weightController as ctrl',
                resolve: {'pullModelData': function(pullModel){ 
                    return fooodModel.ruwmpromise;
                    }
                }
            })

            //dietician
            .when('/food', {
                templateUrl: 'app/components/food/foodView.html',
                controller: 'foodController as ctrl',
                resolve: {'pullModelData': function(pullModel){
                    return foodModel.flpromise; 
                    return foodModel.umlpromise;  
                    return foodModel.uflpromise;
                    } 
                }
            });
       
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
    
}());
    