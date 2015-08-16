(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('symptomsController', function(symptomsModel) {
            var self = this;
        
            self.id = "symptoms";
            self.submitvalue = "Submit Symptom";
            self.title = "Enter your Symptoms below";
            
            self.selected;
            self.tab;
        
            self.symptoms = symptomsModel.symptoms;
        
            self.selectSymptoms = function(toadd){
                self.selected = toadd;
                self.setTab(toadd.Name);
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
                self.symptom.name = self.selected.Name;
                symptomsModel.submitCurrentSymptom(self.symptom);  
            };

    });
}());