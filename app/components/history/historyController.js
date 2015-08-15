(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('historyController', function($scope) {
            var self = this;
        
            self.tab = 'graph';
            //graph, table, summary
        
            self.select = 'calories';
            //calories, protein, fluid, weight
            
            self.weight = "100"; 

            self.setTab = function (tabId) {
                self.tab = tabId;
            };

            self.isSet = function (tabId) {
                return self.tab === tabId;
            };
        
        

            $scope.data = [
                {x: 0, val_0: 4, val_1: 25, val_2: 60},
                {x: 1, val_0: 8, val_1: 18, val_2: 40},
                {x: 2, val_0: 15, val_1: 40, val_2: 50}
            ];
        
            $scope.options = {
              axes: {
                  x: {key: 'x', ticksFormat: '.2f', type: 'linear', min: 0, max: 2, ticks: 2},
                  y: {type: 'linear', min: 0, max: 20, ticks: 5},
              },
              margin: {
                  right: 100
              },
              series: [
                  {y: 'val_0', color: '#00CC99', axis:'y0', thickness: '2px', type: 'area', striped: true, label: 'Calories'}
              ],
                  lineMode: 'linear',
                  tension: 0.7,
                  drawLegend: true,
                  drawDots: true,
                  hideOverflow: false,
                  columnsHGap: 5
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
                self.items[i].TotalCal = multical;
                
                var multipro = self.items[i]["Protein.g"] * self.items[i].Quantity;     
                self.items[i].TotalPro = multipro;
                
                var multiflu = self.items[i]["Water.g"] * self.items[i].Quantity;
                self.items[i].TotalFlu = multiflu;
                
                self.items[i].TotalWeight = "Total Weight Value TBC";
            }; 
        };
        
        self.processData();

    });
}());