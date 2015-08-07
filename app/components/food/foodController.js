(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('foodController', function() {
            var self = this;
            self.tab = 1;
        
            this.setTab = function(tabId) {
                self.tab = tabId;
            };
        
            this.isSet = function(tabId) {
                return self.tab === tabId;
            };
        
            this.title = "Title";
            this.body = "Body";
    });
}());