app.config(['$stateProvider ', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

 $stateProvider
	    .state('home', {
      url: '/home',
      templateUrl: 'index.html',
	    controller: 'indexCtrl'

    });

  $urlRouterProvider.otherwise('home');
}])
