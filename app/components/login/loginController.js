(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('loginController', function($location) {
            var self = this;
            
            this.submit = function(){
                console.log('User submitted with ', self.user);
                $location.path('/home');
            };
    });
}());