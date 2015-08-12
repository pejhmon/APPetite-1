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
        
            self.items = [{ 
	        "FoodCode": "13-042",
	        "label": "Aduki beans, dried, boiled in unsalted water",
	        "EdibleProportion": "1.00",
	        "Water.g": "59.4",
	        "Protein.g": "9.3",
	        "Fat.g": "0.2",
	        "Carbohydrate.g": "22.5",
	        "Energy.kcal": "123",
	        "Energy.kJ": "525",
	        "Starch.g": "20.8"
	      },
	      {
	        "FoodCode": "13-041",
	        "label": "Aduki beans, dried, raw",
	        "EdibleProportion": "1.00",
	        "Water.g": "12.7",
	        "Protein.g": "19.9",
	        "Fat.g": "0.5",
	        "Carbohydrate.g": "50.1",
	        "Energy.kcal": "272",
	        "Energy.kJ": "1158",
	        "Starch.g": "44.7"
	      },
	      {
	        "FoodCode": "17-241",
	        "label": "Advocaat",
	        "EdibleProportion": "1.00",
	        "Water.g": "47.6",
	        "Protein.g": "4.7",
	        "Fat.g": "6.3",
	        "Carbohydrate.g": "28.4",
	        "Energy.kcal": "260",
	        "Energy.kJ": "1091",
	        "Starch.g": "0.0"
	      },
	      {
	        "FoodCode": "13-146",
	        "label": "Agar, dried",
	        "EdibleProportion": "1.00",
	        "Water.g": "9.7",
	        "Protein.g": "1.3",
	        "Fat.g": "1.2",
	        "Carbohydrate.g": "Tr",
	        "Energy.kcal": "16",
	        "Energy.kJ": "67",
	        "Starch.g": "0.0"
	      },
	      {
	        "FoodCode": "13-147",
	        "label": "Agar, dried, soaked and drained",
	        "EdibleProportion": "1.00",
	        "Water.g": "84.2",
	        "Protein.g": "0.2",
	        "Fat.g": "0.1",
	        "Carbohydrate.g": "Tr",
	        "Energy.kcal": "2",
	        "Energy.kJ": "7",
	        "Starch.g": "0.0"
	      },
            ];
            
            self.title = self.tab;
            self.body = "Body";
            
            self.caltotal = 0;
            self.prototal = 0;
            self.flutotal = 0;
        
            self.meals = ["Macdonilds","Cheps"];

        
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
        
        
            self.save = function(){
                console.log(self.selected);
            };
        
            self.submit = function(){
                console.log(self.selected);
            };
        
    });
}());