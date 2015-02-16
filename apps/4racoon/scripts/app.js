'use strict';

/**
 * @ngdoc overview
 * @name yoBootstrapApp
 * @description
 * # yoBootstrapApp
 *
 * Main module of the application.
 */
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
      .otherwise({
        templateUrl: 'views/content.html',
        controller: 'RacoonCtrl'
      });
  });