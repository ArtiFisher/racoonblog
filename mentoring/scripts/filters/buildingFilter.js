'use strict';

angular.module('yoBootstrapApp').filter('building', function() {
    return function(items, building) {
        var result = items;
        if ((items.length != 0) && (building !== 'All')) {
            result = items.filter(function(element){
                if (element.building === building) {
                    return true;
                }
                return false;
            });
        }
        return result;
    };
});