'use strict';

angular.module('yoBootstrapApp').filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});