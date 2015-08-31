(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('registerController', function(registerModel) {
            var self = this;
            self.id = "Register";
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
            };
            
    });
}());