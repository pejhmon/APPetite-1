(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('loginModel', function(){
            var self = this;
            
            //SC10 - Login verification
            self.login = function(logindetails){
                console.log(logindetails);
            };
            
    });
  
}());