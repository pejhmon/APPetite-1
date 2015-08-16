(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('symptomsModel', function(){
            var self = this;
            
            //SC12 Pull all symptoms down from SymptomsList
            //BAD JSON
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
                "Name": "I am so sick of this project",
              },
            ];
                
            //SC13 Log new symptom to symptomsList
            self.submitNewSymptom = function(newsymptom){
                console.log(newsymptom);
            };
        
            //SC14 Submit current symptoms to usersymptomManifest
            self.submitCurrentSymptom = function(currentsymptom){
                console.log(currentsymptom);
            };
            
    });
  
}());