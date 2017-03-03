app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'views/cilayout.html',
			controller:'loginController'
			

			
 		})
		.when('/mainpage',{
			templateUrl : 'views/mainpage.html',
			controller:'loginController'
			
		})
		
	
		.otherwise({
			redirectTo : '/'
			
		})
}]);


