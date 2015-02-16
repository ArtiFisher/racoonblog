'use strict';

angular.module('yoBootstrapApp')
    .directive('content', function() {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'views/content.html',
            controller: function($scope, arrayProvider, indexProvider){
                $scope.index = indexProvider.get();
                $scope.pages = arrayProvider.get();
                $scope.getIndex = function(){
                    return indexProvider.get();
                }
            }
        }
    });