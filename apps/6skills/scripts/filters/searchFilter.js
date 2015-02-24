'use strict';

angular.module('yoBootstrapApp').filter('search', function(data) {
    return function(items, query) {
        var result = items;
        if ((items.length != 0) && (query)) {
            result = items.filter(function(element, index, array){
                var result = false;
                if (element.description.search(query) >= 0) {
                    result = true;
                }
                for (var i = 0; i < element.tags.length; i++){
                    if (element.tags[i].search(new RegExp(query, 'i')) >= 0) {
                        result = true;
                    }
                    
                }
                return result;
            });
        }
        return result;
    };
});