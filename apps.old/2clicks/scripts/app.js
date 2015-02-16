'use strict';

angular
  .module('yoBootstrapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/nav.html',
        controller: 'NavCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
