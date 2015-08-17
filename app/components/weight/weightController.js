(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('weightController', function(foodModel, weightModel) {
            var self = this; 
            self.id = "weight";
            
            self.submitvalue = "Submit Weight";
            self.title = "Entering your weight on a weekly basis is reccomended";
        
            self.weight = foodModel.pull_recent_uwm();
        
            self.symptoms = [{ 
                "Name": "Swollen Legs",
              },
              {
                "Name": "Swollen Feet",
              },
              {
                "Name": "Swollen Abdomen",
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
                weightModel.submitWeight(self.symptom);
            }
    });
}());