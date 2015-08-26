(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('registerController', function($location, registerModel) {
            
            var self = this;
            self.tab = 'patient';
            //includes 'dietician'

            this.setTab = function (tabId) {
                self.tab = tabId;
            };

            this.isSet = function (tabId) {
                return self.tab === tabId;
            };
        
            this.submit = function(){
                registerModel.push_register(self.user);
                $location.path('/');
            };
            
    });
}());