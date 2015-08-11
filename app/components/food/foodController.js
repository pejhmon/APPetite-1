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
        
            self.setTab = function(tabId) {
                self.tab = tabId;
            };
        
            self.isSet = function(tabId) {
                return self.tab === tabId;
            };
            
            //Needs a switch
            self.title = self.tab;
            self.body = "Body";
        
        
            self.items = [ 
                'Tomato Ketchup Ice Cream',
                'Breast Milk Cream',
                'Breast of Pidgeon',
            ];

        
    });
}());