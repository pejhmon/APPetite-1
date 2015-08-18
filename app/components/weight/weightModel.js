(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('weightModel', function(pushModel){
            var self = this;
            
            //SC6
            self.weight = 220;
        
            //SC15 - Push object to userweightmanifest
            self.submitWeight = function(currentweight){
                pushModel.push_uwm(currentweight);
            };
    });
  
}());