(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('pushModel', function($http){
            var self = this;
            
            //SC3 - Push to userMealList
            self.push_uml = function(selected){
                console.log('SC3 FIRE with...');
                console.log(selected);
                
                //looping through each time in given array
                for (var i = 0; i < selected.length; i++){ 
                    var push = $http({
                        method: 'post',
                        url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                        data: {
                            table: "usermeallist",
                            userid: 9,
                            mealname: "genericmealname",
                            carbohydrate_g: selected[i].carbohydrate_g,
                            edibleproportion: selected[i].edibleproportion,
                            energy_kcal: selected[i].energy_kcal,
                            fat_g: selected[i].fat_g,
                            foodcode: selected[i].foodcode,
                            foodname: selected[i].foodname,
                            protein_g: selected[i].protein_g,
                            quantity: 1,
                            starch_g: selected[i].starch_g,
                            water_g: selected[i].water_g,
                        },
                        headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                    }).success(function (data){
                        console.log('Returned: '+data);
                    });
                };
            };
        
            //SC4 - Push to userFoodManifest
            self.push_ufm = function(selected){
                console.log('SC4 FIRE with...');
                console.log(selected);
            
                //looping through each item in array given over
                for (var i = 0; i < selected.length; i++){
                    var push = $http({
                        method: 'post',
                        url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                        data: {
                            table: "userfoodmanifest",
                            userid: 9,
                            carbohydrate_g: selected[i].carbohydrate_g,
                            edibleproportion: selected[i].edibleproportion,
                            energy_kcal: selected[i].energy_kcal,
                            fat_g: selected[i].fat_g,
                            foodcode: selected[i].foodcode,
                            foodname: selected[i].foodname,
                            protein_g: selected[i].protein_g,
                            quantity: 1,
                            starch_g: selected[i].starch_g,
                            water_g: selected[i].water_g,
                        },
                        headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                    }).success(function (data){
                        console.log('Returned: '+data);
                    });
            };
                
            };
        
            //SC5 - Push to userMealList
            self.push_ufl = function(newfood){
                console.log('SC5 FIRE with...');
                console.log(newfood);
                
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "userfoodlist",
                        userid: 9,
                        edibleproportion: newfood.edibleproportion,
                        energy_kcal: newfood.energy_kcal,
                        fat_g: newfood.fat_g,
                        foodcode: 100,
                        foodname: newfood.foodname,
                        protein_g: newfood.protein_g,
                        water_g: newfood.water_g,
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                }).success(function (data){
                    console.log('Returned: '+data);
                });
                
                
            };
        
            //SC13 - Log new symptom to usersymptomsList
            self.push_usl = function(newsymptom){
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "usersymptomlist",
                        userid: 9,
                        symptom: newsymptom.symptom
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                }).success(function (data){
                    console.log('Returned: '+data);
                });
            };
            
            //SC14 - Submit current symptoms to usersymptomManifest
            self.push_usm = function(currentsymptom){

                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "usersymptommanifest",
                        userid: 9,
                        symptomid: 202,
                        symptom: currentsymptom.symptom,
                        rating: 202,
                        comment: currentsymptom.comment,
                        
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                }).success(function (data){
                    console.log('Returned: '+data);
                });
            };
        
            //SC15 - Push object to userweightmanifest
            self.push_uwm = function(currentweight){
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "userweightmanifest",
                        userid: 9,
                        weight: currentweight.weight,
                        swollenfeet: currentweight.swollenfeet,
                        swollenlegs: currentweight.swollenlegs,
                        swollenabdomen: currentweight.swollenabdomen,
    
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                }).success(function (data){
                    console.log('Returned: '+data);
                });
            };

            
    });
  
}());