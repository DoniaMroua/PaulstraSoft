var app = angular.module('app',['ngRoute','ui.bootstrap','pascalprecht.translate','smart-table']);
app.config(function( $translateProvider ) {
    // Our translations will go in here
    // $translateProvider provides a method called translations(), which takes care of creating a translation table for us
    // $translateProvider.translations() expects a language key and the translation table as arguments.
    $translateProvider.useStaticFilesLoader({
      prefix: 'language/',
      suffix: '.json'
     });
    // The preferredLanguage() method tells angular-translate which of the registered languages is the one that our app should use, by default
    $translateProvider.preferredLanguage('en');
  //  $translateProvider.useLocalStorage();
});
app.config(['$routeProvider', function($routeProvider) {
 $routeProvider
    .when('/home', {
      templateUrl: 'view/home.html',
	    controller: 'IndexController'
    })
    .when('/menu', {
      templateUrl: 'view/menu/menu.html',
      controller: 'MenuController'
    })
    .when('/transmissibility', {
      templateUrl: 'view/transmissibility/transmissibility.html',
      controller: 'PlotTransmissibilityController'
    })
    .when('/productdatasheet', {
      templateUrl: 'view/product_datasheet/product_datasheet.html',
      controller: 'ProductDataSheetController'
    }).
    otherwise({
          redirectTo: '/home'
        });
}]);
