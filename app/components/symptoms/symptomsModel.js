(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('symptomsModel', function($http){
            var self = this;
            
            //SC12 Pull all symptoms down from SymptomsList
            self.symptoms = [{"id":"1","symptom":"Mouth sores","rateable":"1"}, {"id":"2","symptom":"Taste changes","rateable":"1"}, {"id":"3","symptom":"Difficulty swallowing","rateable":"1"}, {"id":"4","symptom":"Loss of appetite","rateable":"1"}, {"id":"5","symptom":"Acid reflux","rateable":"1"}, {"id":"6","symptom":"Nausea","rateable":"1"}, {"id":"7","symptom":"Vomiting","rateable":"1"}, {"id":"8","symptom":"Dumping syndrome","rateable":"1"}, {"id":"9","symptom":"Abdominal pain with eating","rateable":"1"}, {"id":"10","symptom":"Abdominal pain after eating","rateable":"1"}, {"id":"11","symptom":"Bloating","rateable":"1"}, {"id":"12","symptom":"Loose stools","rateable":"1"}, {"id":"13","symptom":"Pale\/oily\/difficult to flush stools","rateable":"1"}, {"id":"14","symptom":"Bowels opened over 4 times a day","rateable":"1"}, {"id":"15","symptom":"Constipation","rateable":"1"}];
        
            //SC17 Pull all usersymptoms
            self.usersymptoms = [{"id":"1","userid":"4","datetime":"2015-08-16 22:45:00","symptom":"I have the buttocks problems"}];
                
        
        
        
            //SC13 Log new symptom to usersymptomsList
            self.submitNewSymptom = function(newsymptom){
                console.log(newsymptom);
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
        
        
        
        
            //SC14 Submit current symptoms to usersymptomManifest
            self.submitCurrentSymptom = function(currentsymptom){
                console.log(currentsymptom);
            };
            
    });
  
}());