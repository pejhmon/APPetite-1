(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('foodController', function($location, foodModel) {
            var self = this;
        
            self.tab = 'food';
                //1 - food
                //2 - new
                //3 - frequent
                //4 - meals
                //5 - date
            self.selected = [];
        
            self.items = foodModel.foodlist;
            self.meals = foodModel.userMealList;
            
            self.caltotal = 0;
            self.prototal = 0;
            self.flutotal = 0;
        
            self.setTab = function(tabId) {
                self.tab = tabId;
            };
        
            self.isSet = function(tabId) {
                return self.tab === tabId;
            };
       
            self.itemSelect = function(toadd){
                
                var test = self.checkForDuplicates(toadd);
                if (test >= 0){
                    self.selected[test].quantity++;
                }else{
                    toadd.quantity = 1;
                    self.selected.push(toadd);
                }
                
                self.caltotal = self.caltotal + Number(toadd["Energy.kcal"]);
                self.prototal = self.prototal + Number(toadd["Protein.g"]);
                self.flutotal = self.flutotal + Number(toadd["Water.g"]);
            };
        
            self.checkForDuplicates = function(testee){
                var index = self.selected.indexOf(testee);
                return index;
            };
            
            self.clear = function(){                
                self.caltotal = 0;
                self.prototal = 0;
                self.flutotal = 0;        
                self.selected = [];
            };
        
        
            self.saveSelected = function(){
                foodModel.saveSelected(self.selected);
                
            };
        
            self.submitSelected = function(){
                foodModel.submitSelected(self.selected);
            };
        
            self.submitNewFood = function(){
                foodModel.submitNewFood(self.newfood);
                self.tab = 'food';
            };  
        
    });
}());