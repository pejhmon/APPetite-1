(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .filter('dateTime', function() {
            return function(input){
                return input.split(' ',1).join('');
            };
   
        
    });
}());