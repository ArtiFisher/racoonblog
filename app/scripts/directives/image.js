'use strict';

angular.module('yoBootstrapApp').directive('image', function(image64) {
    return {
        restrict: 'A',
        scope: {},
        link: function(scope, element) {
            element.change(function() {
                var file = document.querySelector('.create input[type=file]').files[0];
                var reader = new FileReader();

                reader.onloadend = function() {

                    // scope.$parent.image = reader.result;
                    image64.image = reader.result;
                };

                if (file) {
                    reader.readAsDataURL(file);
                } else {
                    // scope.$parent.image = "";
                    image64.image = '';
                }
            });
        }
    };
});