'use strict';

angular.module('yoBootstrapApp')
  .controller('ContactCtrl', function ($scope, array) {
  	$scope.pages = array.get();
  });
