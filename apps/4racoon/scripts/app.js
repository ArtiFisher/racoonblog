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
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/main.html',
                controller: 'RacoonCtrl'
            })
            .when('/post/:postId', {
                templateUrl: '/views/one-post.html',
                controller: 'OnePostCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
    
NProgress.configure({ease: 'ease', speed: 600});