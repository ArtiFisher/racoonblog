'use strict';

describe('Preview Filter', function() {
  beforeEach(module('yoBootstrapApp'));

  var preview;

  beforeEach(inject(function($filter) {
    preview = $filter('preview');
  }));

  it('should work for short text', function() {
    expect(preview('asgasfs')).toEqual('asgasfs');
  });

  it('should work for empty string', function() {
    expect(preview('')).toEqual('');
  });
});