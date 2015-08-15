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
        
        

              $scope.config = {
                title: 'Products',
                tooltips: true,
                labels: false,
                mouseover: function() {},
                mouseout: function() {},
                click: function() {},
                legend: {
                  display: true,
                  //could be 'left, right'
                  position: 'right'
                }
              };

              $scope.data = {
                series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
                data: [{
                  x: "Laptops",
                  y: [100, 500, 0],
                  tooltip: "this is tooltip"
                }, {
                  x: "Desktops",
                  y: [300, 100, 100]
                }, {
                  x: "Mobiles",
                  y: [351]
                }, {
                  x: "Tablets",
                  y: [54, 0, 879]
                }]
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