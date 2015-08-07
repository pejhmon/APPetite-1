(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('foodController', function() {
            var self = this;
            self.tab = 'food';
                //1 - food
                //2 - new
                //3 - frequent
                //4 - meals
                //5 - date
        
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