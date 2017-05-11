(function(){
	'use strict'

	angular
		.module('dans', ['ngRoute']) // inject ngMessage
		.config(config)
	function config($routeProvider, $locationProvider){
        $routeProvider

    		// home page
    		.when('/', {
    			templateUrl: 'views/home.html',
    			controller: 'HomeController'
    		})

    		// dashboard page
    		.when('/dash', {
    			templateUrl: 'views/dash.html',
    			controller: 'DashController'
    		})

				.when('/thompson01', {
					templateUrl: 'views/thompson01.html',
				})

				.when('/thompson02', {
					templateUrl: 'views/thompson02.html',
				})

				.when('/thompson03', {
					templateUrl: 'views/thompson03.html',
				})

				.when('/hoot01', {
					templateUrl: 'views/hoot01.html',
				})


            // 404 page
    		.when('/404', {
    			templateUrl: 'views/404.html',
    			controller: '404Controller'
    		})

            // Redirect all others to 404
    		.otherwise('/404');

    	$locationProvider.html5Mode(true);
	}
})();
