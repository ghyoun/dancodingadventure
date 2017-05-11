(function(){
	'use strict'
    angular
        .module('dans')
        .controller('Hoot01Controller', function($scope) {
					$scope.onload = function() {
						document.getElementById('newBody').style.backgroundPosition = "-420px 0px";
					}
        })
})()
