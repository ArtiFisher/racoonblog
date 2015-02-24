'use strict';

angular.module('yoBootstrapApp').directive('instead', function() {
    return {
        restrict: 'A',
        scope: {},
        link: function(scope, element, attrs) {
            element.click(function() {
                var checked = document.getElementById(attrs.of).checked;
                document.getElementById(attrs.of).checked = !checked;
            });
        }
    };
});