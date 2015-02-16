'use strict';

angular.module('yoBootstrapApp')
  .controller('AboutCtrl', function ($scope, array) {
  	$scope.pages = array.get();
  });
