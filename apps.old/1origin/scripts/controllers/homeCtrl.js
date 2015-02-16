'use strict';

angular.module('yoBootstrapApp')
  .controller('HomeCtrl', function ($scope, array) {
  	$scope.pages = array.get();
  })
  .service('array', function(){
  	this.get = (function() {
		return [{title: 'Home title', text: 'my homey'}, {title: 'About title', text: 'about me'}, {title: 'Contact title', text: 'my contacts'}];
	});
  });
