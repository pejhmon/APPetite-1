(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('historyModel', function(){
            var self = this;
            
            //SC6 - Pull current weight from userweightmanifest
            self.weight = 100;
        
            //SC7 - Pull the user food manifest
            self.userfoodmanifest = [{"id":"1","userid":"3","datetime":"2015-08-01 10:44:00","foodtable":"userfoodlist","foodcode":"11-594","foodname":"Bread pudding","quantity":"10","edibleproportion":"1","energy_kcal":"289","protein_g":"5.9","water_g":"30.6","carbohydrate_g":"48","fat_g":"9.5","meal":""}, {"id":"2","userid":"3","datetime":"2015-08-01 10:44:00","foodtable":"userfoodlist","foodcode":"11-641","foodname":"Chocolate cake","quantity":"1","edibleproportion":"1","energy_kcal":"464","protein_g":"7.3","water_g":"12.7","carbohydrate_g":"50.5","fat_g":"27","meal":""}];
            
    
    });
  
}());