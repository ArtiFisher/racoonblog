'use strict';

describe('OnePostCtrl', function($scope, $rootScope, $provide) {
	beforeEach(module('yoBootstrapApp'));

	var ctrl, scope;
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller('OnePostCtrl', {
		  $scope: scope
		});
	}));

	document.querySelector = function(){
		return {
			classList:{
				toggle: function(){
					console.log('toggled editing');
				}
			}
		}
	};

	it('should update post', 
	function() {
		scope.updatePost();
		expect(scope.$parent.articles[scope.index]).toEqual(scope.chosenPost);
	});
});