'use strict';

angular.module('yoBootstrapApp').filter('dateSort', function() {
    return function(items) {
        var result = items;
        if (items.length > 0) {
            result = items.sort(function(a, b){
                return new Date(b.date) - new Date(a.date);
            });
        }
        return result;
    };
});