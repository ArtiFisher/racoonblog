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
      // .when('/page0', {
      //   templateUrl: 'views/content.html',
      //   controller: 'PagesCtrl'
      // })
      // .when('/page1', {
      //   templateUrl: 'views/content.html',
      //   controller: 'PagesCtrl'
      // })
      // .when('/page2', {
      //   templateUrl: 'views/content.html',
      //   controller: 'PagesCtrl'
      // })
      // .when('/page3', {
      //   templateUrl: 'views/content.html',
      //   controller: 'PagesCtrl'
      // })
      // .when('/page4', {
      //   templateUrl: 'views/content.html',
      //   controller: 'PagesCtrl'
      // })
      .otherwise({
        // redirectTo: '/page0'
        templateUrl: 'views/racoon.html',
        controller: 'RacoonCtrl'
      });
  });