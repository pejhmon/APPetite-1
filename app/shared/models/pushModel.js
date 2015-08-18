(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('pushModel', function($http){
            var self = this;
            
            //SC3 - Push to userMealList
            self.push_uml = function(selected){
                console.log('SC3 FIRE with '+selected);
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "usermeallist",
                        userid: 9,
                        symptom: newsymptom.symptom
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                }).success(function (data){
                    console.log('Returned: '+data);
                });
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
                            energy_kcal: selected[i].energykcal,
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
                console.log('SC5 FIRE with '+newfood);
            };
        
            //SC13 - Log new symptom to usersymptomsList
            self.push_usl = function(newsymptom){
                console.log('SC13 complete with '+newsymptom);
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
                console.log('SC14 FIRE with '+currentsymptom);
            };
        
            //SC15 - Push object to userweightmanifest
            self.push_uwm = function(currentweight){
                console.log('SC15 FIRE with '+currentweight);
            };

            
    });
  
}());