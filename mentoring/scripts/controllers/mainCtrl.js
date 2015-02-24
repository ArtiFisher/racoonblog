'use strict';

angular.module('yoBootstrapApp').controller('MainCtrl', function($rootScope, $scope, $sce, mentors, data) {
	$scope.mentors = mentors;
	$scope.buildings = data.getBuildings();
	$scope.buildings.unshift('All');
	$scope.currentBuilding = $scope.buildings[0];
});
