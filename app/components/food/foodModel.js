(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('foodModel', function($http){
            var self = this;

            //EMPTY VARS
            var foodlist = null;
            var userfoodlist = null;
            var usermeallist = null;
            
        

        
            //PROMISES
        
            //Promise for SC1 - Pull all foodlist 
            var foodlistpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "foodlist",
                        type: "all",
                        userID: ""
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    foodlist = data; 
                });
            
            //Promise for SC16 - Pull all userfoodlist
            var userfoodlistpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userfoodlist",
                        type: "all",
                        userID: ""
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    userfoodlist = data; 
                });
        
            //Promise for SC2 - Pull all usermeallist
            var usermeallist = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "usermeallist",
                        type: "all",
                        userID: ""
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    usermeallist = data; 
                });
        
        
        
            //RETURN OBJECT
            return {
                foodlistpromise: foodlistpromise,
                userfoodlistpromise: userfoodlistpromise,
                usermeallist: usermeallist,
                
                setData: function(data){
                    foodlist = data;
                    userfoodlist = data;
                    usermeallist = data;
                },
                
                //Function for SC1
                pull_all_foodlist: function() {
                    return foodlist;
                },
                
                //Fuction for SC16
                pull_all_userfoodlist: function() {
                    return userfoodlist;
                },
                
                //Function for SC2
                pull_all_usermeallist: function() {
                    return usermeallist;
                },
            };

        
        
        
   
                
//                var push_selected_usermeallist = $http({
//                    method: 'post',
//                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
//                    data: {
//                        table: "usermeallist",
//                        type: "all",
//                        userID: ""
//                    },
//                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
//                })
//                .success(function (data){
//                    console.log('FIRE');
//                });
            
            //SC3 - Push to userMealList
            self.saveSelected = function(selected){
                return console.log(selected);
            };
        
            //SC4 - Push to userFoodManifest
            self.submitSelected = function(selected){
                console.log(selected);
            };
        
            //SC5 - Push to userMealList
            self.submitNewFood = function(newfood){
                console.log(newfood);
            };
    });
  
}());