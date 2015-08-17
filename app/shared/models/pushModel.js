(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('pushModel', function($http){
            var self = this;
            
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