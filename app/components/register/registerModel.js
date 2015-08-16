(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('registerModel', function(){
            var self = this;
            
            //SC11 - Register model
            self.register = function(registerdetails){
                console.log(registerdetails);
            };
            
            
    });
  
}());