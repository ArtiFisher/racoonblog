'use strict';

angular.module('yoBootstrapApp').filter('preview', function() {
    return function(text) {
        return text.slice(0, 100);
    };
});