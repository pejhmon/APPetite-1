(function() {
    'use strict';
    angular
        .module('appetiteApp')    
        .factory('authService', function(){

            return{
                setUser : function(user){
                    localStorage.setItem("user", user);
                },
                getUser : function(){
                    return localStorage.getItem("user");
                }
              }
        });
    }());