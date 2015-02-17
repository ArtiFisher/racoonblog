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
      .when('/home', {
        templateUrl: '/views/content.html',
        controller: 'RacoonCtrl'
      })
      .when('/post/:postId', {
        templateUrl: '/views/one-post.html',
        controller: 'RacoonCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });