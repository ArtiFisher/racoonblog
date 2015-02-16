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
    .config(function($routeProvider) {
        $routeProvider
            .otherwise({
                templateUrl: 'views/content.html',
                controller: 'PagesCtrl'
            });
    });
