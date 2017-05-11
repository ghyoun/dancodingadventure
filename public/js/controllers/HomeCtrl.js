(function(){
	'use strict'
    angular
        .module('dans')
        .controller('HomeController', function($scope) {
					$scope.redirect = function(link) {
						console.log(link);
					};
					$scope.onload = function() {
						document.getElementById('newBody').style.backgroundPosition = "0px 0px";
					}
        })
})()
