(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('weightModel', function(){
            var self = this;
            
            //SC6
            self.weight = 220;
        
            //SC15 - Push object to userweightmanifest
            self.submitWeight = function(currentweight){
                console.log(currentweight);
            };
    });
  
}());