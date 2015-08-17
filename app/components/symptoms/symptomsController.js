(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('symptomsController', function(foodModel, symptomsModel) {
            var self = this;
        
            self.id = "symptoms";
            self.submitvalue = "Submit Symptom";
            self.title = "Enter your Symptoms below";
            
            self.selected;
            self.tab;
            
            self.mmmerge = function(major, minor){
                var output = [];
                var i = 0;
                while (i < major.length){
                    output[i] = major[i];
                    i++;
                };
                for (var j = 0; j < minor.length; j++){
                    output[i] = minor[j];
                    i++;
                };
                return output;
            };
        
            self.symptoms = self.mmmerge(foodModel.pull_all_sl(), foodModel.pull_all_usl());
        
            self.selectSymptoms = function(toadd){
                console.log(toadd);
                self.selected = toadd;
                self.setTab(toadd);
            };
        
            self.setTab = function (tabId) {
                self.tab = tabId;
            };

            self.isSet = function (tabId) {
                return self.tab === tabId;
            };
        
            self.submitSymptom = function(){
                symptomsModel.submitNewSymptom(self.newsymptom);
            };
    
            self.submit = function(){
                self.symptom.symptom = self.selected;
                symptomsModel.submitCurrentSymptom(self.symptom);  
            };

    });
}());