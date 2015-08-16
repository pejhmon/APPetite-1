(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('foodModel', function(){
            var self = this;
        
            //SC1 - Pull the entireity of foodlist 
            self.foodlist = [{ 
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
        
            //SC2 - Pull the entireity of userMealList
            //BADLY FORMATTED JSONf
            self.userMealList = ["Macdonilds","Cheps"];
        
            //SC3 - Push to userMealList
            //Nested objects - To handle
            self.saveSelected = function(selected){
                console.log(selected);
            };
        
            //SC4 - Push to userFoodManifest
            self.submitSelected = function(selected){
                console.log(selected);
            };
        
            //SC5 - Push to userMealList
            self.submitNewFood = function(newfood){
                console.log(newfood);
            };
    });
  
}());