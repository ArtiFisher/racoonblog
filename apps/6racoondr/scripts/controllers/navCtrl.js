'use strict';

angular.module('yoBootstrapApp')
	.controller('NavCtrl', function ($scope, array, $location) {
		$scope.pages = array.get();
		$scope.index = parseInt(($location.path().split('/')[1]).match(/(\d+)$/)[0]);
	});
