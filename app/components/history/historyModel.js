(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('historyModel', function(){
            var self = this;
            
            //SC6 - Pull current weight from userweightmanifest
        
            self.pull_recent_weight = function(){
                var request = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userweightmanifest",
                        type: "recent",
                        userID: 1
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                });
                
                request.success(function(data){
                    console.log('FIRE SC6 - Pull recent userMealList');
                    console.log(data); 
                });
            };
        
            self.pull_recent_weight();
            //self.weight = self.pull_recent_weight();
        
        
            self.weight = 100;
            
        
        
        
            //SC18 - Pull earliest weight
            self.earliestweight = 50;
        
        
            //SC7 - Pull the user food manifest
            self.userfoodmanifest = [{"id":"1","userid":"3","datetime":"2015-08-01 10:44:00","foodtable":"userfoodlist","foodcode":"11-594","foodname":"Bread pudding","quantity":"10","edibleproportion":"1","energy_kcal":"289","protein_g":"5.9","water_g":"30.6","carbohydrate_g":"48","fat_g":"9.5","meal":""}, {"id":"2","userid":"3","datetime":"2015-08-01 10:44:00","foodtable":"userfoodlist","foodcode":"11-641","foodname":"Chocolate cake","quantity":"1","edibleproportion":"1","energy_kcal":"464","protein_g":"7.3","water_g":"12.7","carbohydrate_g":"50.5","fat_g":"27","meal":""}];
            
        
        
        
            //SC9 - Pull all from userRequirementsManifest
            self.userrequirements = [{"id":"1","userid":"1","datetime":"2015-07-31 17:44:28","gender":"Male","weight":"100","activitylevel":"1","formulacalories":"2427","formulaprotein":"106.25","formulafluid":"3500","additionalcalories":"0","additionalprotein":"0","additionalfluid":"0","additionalactivitylevel":"0","finalcalories":"2427","finalprotein":"106.25","finalfluid":"3500"}];
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            
            //SC20 - Pull all from userSymptomsManifest
            self.usersymptomsmanifest = [{"id":"1","userid":"4","datetime":"2015-08-01 16:28:00","symptomtable":"symptomlist","symptomid":"1","symptom":"Mouth sores","rating":"0","comment":""}, {"id":"2","userid":"4","datetime":"2015-08-03 13:20:00","symptomtable":"symptomlist","symptomid":"1","symptom":"Mouth sores","rating":"0","comment":""}, {"id":"3","userid":"4","datetime":"2015-08-16 21:43:00","symptomtable":"symptomlist","symptomid":"2","symptom":"Taste changes","rating":"0","comment":"Everything tastes bitter"}, {"id":"4","userid":"4","datetime":"2015-08-16 22:45:00","symptomtable":"usersymptomlist","symptomid":"1","symptom":"I have the buttocks problems","rating":"0","comment":"It hurts"}];
    });
  
}());