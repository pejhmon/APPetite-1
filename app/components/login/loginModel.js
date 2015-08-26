(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('loginModel', function($http){
            var self = this;
            
            //SC10 - Login verification
            var flpromise = $http({
                method: 'post',
                url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                data: {
                    table: "foodlist",
                    type: "all",
                    userID: "",
                },
                headers: { 'Content-Type':'application/x-www-form-urlencoded' }
            })
            .success(function (data){
                console.log(1);
            });
    });
  
}());