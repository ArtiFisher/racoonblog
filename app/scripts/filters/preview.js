'use strict';

angular.module('yoBootstrapApp').filter('preview', function() {
    return function(text) {
    	var result = text;
    	if(text){
        	result = text.slice(0, 100);
    	}
    	return result;
    };
});