'use strict';

describe('OnePostCtrl', function() {
  beforeEach(module('yoBootstrapApp'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('OnePostCtrl', {
      $scope: scope
    });
  }));

  it('should test something?', 
    function() {
  });
});