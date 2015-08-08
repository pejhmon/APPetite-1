(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('historyController', function() {
            var self = this;
            self.tab = 'graph';
            //includes 'dietician'

            this.setTab = function (tabId) {
                self.tab = tabId;
            };

            this.isSet = function (tabId) {
                return self.tab === tabId;
            };

    });
}());