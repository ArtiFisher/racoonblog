'use strict';

var app = angular.module('yoBootstrapApp');

app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

app.filter('authorSearch', function() {
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

app.filter('date', function() {
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

app.filter('preview', function() {
    return function(text) {
        return text.slice(0, 100);
    };
});
