(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('foodModel', function($http){
            var self = this;
        
//            self.testFunction = function(){
//                var request = $http({
//                    method: 'post',
//                    url: "http://appetiteBackEnd.azurewebsites.net/pullAll.php",
//                    data: {
//                        tableName: 'foodlist'
//                    },
//                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
//                });
//                
//                request.success(function(data){
//                    console.log('FIRE');
//                    console.log(data); 
//                });
//            };
//        
//            self.testFunction();
        
            //SC1 - Pull the entireity of foodlist 
            self.foodlist = [{"id":"0","foodcode":"13-042","foodname":"Aduki beans, dried, boiled in unsalted water","edibleproportion":"1.00","water_g":"59.4","protein_g":"9.3","fat_g":"0.2","carbohydrate_g":"22.5","energy_kcal":"123","energy_kj":"525","starch_g":"20."}, {"id":"0","foodcode":"13-041","foodname":"Aduki beans, dried, raw","edibleproportion":"1.00","water_g":"12.7","protein_g":"19.","fat_g":"0.5","carbohydrate_g":"50.1","energy_kcal":"272","energy_kj":"1158","starch_g":"44."}, {"id":"0","foodcode":"17-241","foodname":"Advocaat","edibleproportion":"1.00","water_g":"47.6","protein_g":"4.7","fat_g":"6.3","carbohydrate_g":"28.4","energy_kcal":"260","energy_kj":"1091","starch_g":"0.0"}, {"id":"0","foodcode":"13-146","foodname":"Agar, dried","edibleproportion":"1.00","water_g":"9.7","protein_g":"1.3","fat_g":"1.2","carbohydrate_g":"Tr","energy_kcal":"16","energy_kj":"67","starch_g":"0.0"}, {"id":"0","foodcode":"13-147","foodname":"Agar, dried, soaked and drained","edibleproportion":"1.00","water_g":"84.2","protein_g":"0.2","fat_g":"0.1","carbohydrate_g":"Tr","energy_kcal":"2","energy_kj":"7","starch_g":"0.0"}, {"id":"0","foodcode":"13-148","foodname":"Alfalfa sprouts, raw","edibleproportion":"1.00","water_g":"93.4","protein_g":"4.0","fat_g":"0.7","carbohydrate_g":"0.4","energy_kcal":"24","energy_kj":"100","starch_g":"Tr"}, {"id":"0","foodcode":"11-485","foodname":"All-Bran","edibleproportion":"1.00","water_g":"3.0","protein_g":"13.","fat_g":"4.0","carbohydrate_g":"48.5","energy_kcal":"270","energy_kj":"1144","starch_g":"28."}, {"id":"0","foodcode":"11-624","foodname":"All-Bran loaf","edibleproportion":"1.00","water_g":"26.6","protein_g":"4.9","fat_g":"2.0","carbohydrate_g":"58.7","energy_kcal":"258","energy_kj":"1096","starch_g":"14."}, {"id":"0","foodcode":"13-801","foodname":"Allspice, ground","edibleproportion":"1.00","water_g":"8.5","protein_g":"6.1","fat_g":"8.7","carbohydrate_g":"N","energy_kcal":"N","energy_kj":"N","starch_g":"N"}];
            //SC16 - Pull the entireity of userFoodList
            self.userfoodlist = [{"foodcode":"1","userid":"4","datetime":"2015-08-16 14:31:00","foodname":"Whale penis","edibleproportion":"100","energy_kcal":"500","protein_g":"200","water_g":"100","fat_g":"0"}];
        
            //SC2 - Pull the entireity of userMealList
            self.userMealList = [{"id":"1","userid":"3","datetime":"2015-08-01 10:45:00","mealname":"Kill me","foodtable":"userfoodlist","foodcode":"11-594","edibleproportion":"1","foodname":"Bread pudding","quantity":"10","energy_kcal":"289","protein_g":"5.9","water_g":"30.6","fat_g":"9.5"}, {"id":"2","userid":"3","datetime":"2015-08-01 10:45:00","mealname":"Kill me","foodtable":"userfoodlist","foodcode":"11-641","edibleproportion":"1","foodname":"Chocolate cake","quantity":"1","energy_kcal":"464","protein_g":"7.3","water_g":"12.7","fat_g":"27"}];
        
            //SC3 - Push to userMealList
            //Nested objects - To handle
            self.saveSelected = function(selected){
                console.log(selected);
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