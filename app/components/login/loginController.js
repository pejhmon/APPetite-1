(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('loginController', function() {
            var self = this;
            
            this.submit = function(){
                console.log('User submitted with ', self.user);
            };
    });
}());