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
            self.selected = [];
        
            self.items = [ 
                'Chocolate Milk',
                'Strawberry Milk',
                'Javascript Ice Cream',
                'Raisin Ice Cream',
                'Rum Ice Cream',
                'Green Ice Cream',
                'Warm Ice Cream',
                'Ancient Ice Cream',
                'Vanilla Ice Cream',
                'Mint Ice Cream',
                'Fruit Ice Cream',
                'Chocolate Ice Cream',
            ];
            
            self.title = self.tab;
            self.body = "Body";
            
        
            self.setTab = function(tabId) {
                self.tab = tabId;
            };
        
            self.isSet = function(tabId) {
                return self.tab === tabId;
            };
       
            self.itemsubmit = function(item){
                self.selected.push(item);
                console.log(item);
            }
        
    });
}());