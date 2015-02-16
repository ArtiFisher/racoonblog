'use strict';

angular.module('yoBootstrapApp')
    .controller('PagesCtrl', function($scope, $location, array) {
        $scope.pages = array.get();
        $scope.index = parseInt(($location.path().split('/')[1]).match(/(\d+)$/)[0]);
    })
    .service('array', function() {
        this.get = (function() {
            return [{
                title: 'Home',
                text: 'my homey'
            }, {
                title: 'About',
                text: 'about me'
            }, {
                title: 'Contact',
                text: 'my contacts'
            }, {
                title: 'Contact2',
                text: 'my contacts2'
            }, {
                title: 'Contact3',
                text: 'my contacts3'
            }];
        });
    });
