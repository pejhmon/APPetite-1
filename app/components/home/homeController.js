(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('homeController', function($scope) {
            var self = this;
        
        self.caloriePercent = 90;
        self.protienPercent = 22;
        self.fluidData = 60;
        
        self.caloriesdata = [
            {label: "Calories", value: self.caloriePercent, suffix: "%", color: "#00CC99"}
        ];
        
         self.proteindata = [
            {label: "Protein", value: self.protienPercent, suffix: "%", color: "#FF66FF"}
        ];
        
         self.fluiddata = [
            {label: "Fluid", value: self.fluidData, suffix: "%", color: "#FF9900"}
        ];

        self.gauge_options = {thickness: 15, mode: "gauge", total: 100};
        
    });
}());