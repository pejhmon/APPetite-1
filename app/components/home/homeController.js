(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('homeController', function($scope) {
            var self = this;
        
        self.percentCalculate = function(){
            var todayCal = 1500;
            var reccomendCal = 3000;
            self.caloriesPercent = Math.round((todayCal / reccomendCal) * 100);
            
            var todayPro = 50;
            var reccomendPro = 106;
            self.proteinPercent = Math.round((todayPro / reccomendPro) * 100);
            
            var todayFlu = 200;
            var reccomendFlu = 300;
            self.fluidPercent = Math.round((todayFlu / reccomendFlu) * 100);
        };
        
        self.percentCalculate();
        

        self.caloriesdata = [
            {label: "Calories", value: self.caloriesPercent, suffix: "%", color: "#00CC99"}
        ];
        
         self.proteindata = [
            {label: "Protein", value: self.proteinPercent, suffix: "%", color: "#FF66FF"}
        ];
        
         self.fluiddata = [
            {label: "Fluid", value: self.fluidPercent, suffix: "%", color: "#FF9900"}
        ];

        self.gauge_options = {thickness: 15, mode: "gauge", total: 100};
        
    });
}());