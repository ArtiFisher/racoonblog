'use strict';

angular.module('yoBootstrapApp').filter('date', function() {
    return function(input) {
        var options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        var date = new Date(input);
        var now = date.toLocaleTimeString('en-us', options).split(', ');
        return now[2] + ' ' + now[0] + ', ' + now[1];
    };
});