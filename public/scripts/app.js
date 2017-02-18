'use strict'


angular.module('templateApp', ['ngRoute'])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../templates/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        templateUrl: '../templates/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      });

    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }])

  /*
  - $rootScope to listen for the $routeChangeStart event
  - $location to see what the new path is
  */

  .run(['$rootScope', '$location', function($rootScope, $location) {

    $rootScope.appBackground = "";

    // NOTE: WHEN USER clicks anywhere on a page, trigger this, giving you the option to close any dropdown menus etc.
    angular.element(document).on("click", function(e) {
		    $rootScope.$broadcast("documentClicked", angular.element(e.target));
	  });
  }
]);
