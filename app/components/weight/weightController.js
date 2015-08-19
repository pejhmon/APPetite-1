(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('weightController', function(pullModel, pushModel) {
            var self = this; 
            self.id = "weight";
            
            self.submitvalue = "Submit Weight";
            self.title = "Entering your weight on a weekly basis is reccomended";
        
            self.weight = pullModel.pull_recent_uwm();
        
            self.symptoms = [{ 
                "symptom": "Swollen Legs",
              },
              {
                "symptom": "Swollen Feet",
              },
              {
                "symptom": "Swollen Abdomen",
              }
            ];
        
        
            self.setTab = function (tabId) {
                self.tab = tabId;
            };

            self.isSet = function (tabId) {
                return self.tab === tabId;
            };
        
             self.selectSymptoms = function(toadd){
                self.setTab(toadd.Name);
            };
        
            self.submit = function(){
                pushModel.push_uwm(self.symptom);
            }
    });
}());