'use strict';

/**
 * @ngdoc function
 * @name yoBootstrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoBootstrapApp
 */
angular.module('yoBootstrapApp')
  .controller('NavCtrl', function ($scope) {
    $scope.pages = [{index: 0, text: '0 text'}, {index: 1, text: '1 text'}, {index: 2, text: '2 text'}];
  });
