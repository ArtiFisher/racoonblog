'use strict';

angular.module('yoBootstrapApp').filter('artiSearch', function() {
    return function(items) {
        var result = [];
        if (items) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].author === 'arti') {
                    result.push(items[i]);
                }
            }
        }
        return result;
    };
});