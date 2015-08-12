(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('symptomsController', function() {
            var self = this;
            self.selected;
            self.tab;
        
            self.symptoms = [{ 
                "Name": "Aching Fingers",
              },
              {
                "Name": "Javascript Blues",
              },
              {
                "Name": "Stinking Cold",
              },
              {
                "Name": "Eyes Hurt",
              },
              {
                "Name": "Tiredness",
              },
            ];
        
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
                console.log(self.newsymptom);
            };
    
            self.submit = function(){
                self.symptom.name = self.selected.Name;
                console.log(self.symptom);  
            };

    });
}());