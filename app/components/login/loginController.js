(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('loginController', function($location, loginModel) {
            var self = this;
            
            this.submit = function(){
                loginModel.login(self.user);
            };
    });
}());