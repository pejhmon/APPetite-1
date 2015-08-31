(function() {
'use strict';
    angular
        .module('appetiteApp')
        .directive('navbarWidget', function() {

            return {
                templateUrl: 'app/shared/navbar/navbarView.html',
                restrict: 'A',
            };
        });
}());