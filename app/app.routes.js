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
                resolve: {'homePullModel': function(pullModel){ 
                    return pullModel.tufmpromise;
                    }
                }
            })

            //symptoms  
            .when('/symptoms', {
                templateUrl: 'app/components/symptoms/symptomsView.html',
                controller: 'symptomsController as ctrl',
                resolve: {'symptomPullModel': function(pullModel){ 
                    return pullModel.slpromise;
                    }
                }
            })

            //history
            .when('/history', {
                templateUrl: 'app/components/history/historyView.html',
                controller: 'historyController as ctrl',
                resolve: {'historyPullModel': function(pullModel){ 
                    return pullModel.ufmpromise;
                    return pullModel.urmpromise;
                    return pullModel.fuwmpromise;
                    return pullModel.usmpromise;
                    }
                }
            })

            //weight
            .when('/weight', {
                templateUrl: 'app/components/symptoms/symptomsView.html',
                controller: 'weightController as ctrl',
                resolve: {'weightPullModel': function(pullModel){ 
                    return pullModel.ruwmpromise;
                    }
                }
            })

            //dietician
            .when('/food', {
                templateUrl: 'app/components/food/foodView.html',
                controller: 'foodController as ctrl',
                resolve: {'foodPullModel': function(pullModel){
                    return pullModel.flpromise; 
                    return pullModel.umlpromise;  
                    return pullModel.uflpromise;
                    }
                }
            });
       
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
    
}());
    