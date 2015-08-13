(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('historyController', function() {
            var self = this;
            self.tab = 'graph';
            //includes 'dietician'
        
            self.weight = "100"; 

            this.setTab = function (tabId) {
                self.tab = tabId;
            };

            this.isSet = function (tabId) {
                return self.tab === tabId;
            };

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
                "Starch.g": "20.8",
                "Quantity": "2",
                "Date": "11/08/15"
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
                "Starch.g": "44.7",
                "Quantity": "3",
                "Date": "10/08/15"
              }
            ];
        
        self.processData = function(){
            for(var i = 0; i < self.items.length; i++){
                var multical = self.items[i]["Energy.kJ"] * self.items[i].Quantity;
                var totalcal = {"TotalCal" : multical};
                self.items[i].TotalCal = multical;
            }; 
        };
        
        self.processData();

    });
}());