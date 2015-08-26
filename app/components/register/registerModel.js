(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('registerModel', function($http){
            var self = this;
            
            //SC11 - Register model
            self.push_register = function(registerdetails){       
                    var push = $http({
                        method: 'post',
                        url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                        data: {
                            table: "users",
                            group: 1,
                            password: registerdetails.password,
                            nhsnumber: registerdetails.nhsnumber,
                            dateofbirth: registerdetails.dateofbirth,
                            gender: registerdetails.gender,
                            activitylevel: registerdetails.activitylevel,
                        },
                        headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                    })
                    .success(function (data){
                        console.log('Returned: '+data);
                    });
                };     
        });
    }());

