'use strict';

angular.module('yoBootstrapApp')
    .directive('nav', function() {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'views/nav.html',
            controller: function($scope, arrayProvider, indexProvider){
                $scope.index = indexProvider.get();
                $scope.pages = arrayProvider.get();
                $scope.setIndex = function(newIndex){
                    indexProvider.set(newIndex);
                }
                $scope.getIndex = function(){
                    return indexProvider.get();
                }
            }
        }
    })



