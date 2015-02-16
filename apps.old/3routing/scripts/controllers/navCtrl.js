'use strict';

angular.module('yoBootstrapApp')
	.controller('NavCtrl', function ($scope) {
		$scope.pages = [
			{
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
