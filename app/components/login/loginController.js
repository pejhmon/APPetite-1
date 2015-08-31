(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('loginController', function($location, loginModel) {
            var self = this;
            self.id = "Login";
            self.submit = function(){
                loginModel.pull_login(self.user);
            };
    });
}());