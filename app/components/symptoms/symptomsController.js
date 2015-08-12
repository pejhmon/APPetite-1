(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('symptomsController', function() {
            var self = this;
            self.selected = [];
            self.tab;
        
            self.symptoms = [{ 
                "Name": "Aching Fingers",
              },
              {
                "Name": "Javascript Blues",
              },
              {
                "Name": "Stinking Cold",
              },
              {
                "Name": "Eyes Hurt",
              },
              {
                "Name": "Tiredness",
              },
            ];
        
            self.selectSymptoms = function(toadd){
                self.selected.push(toadd);
                this.setTab(toadd.Name);
            };
        
            this.setTab = function (tabId) {
                self.tab = tabId;
            };

            this.isSet = function (tabId) {
                return self.tab === tabId;
            };

    });
}());