'use strict';

angular.module('yoBootstrapApp').controller('OnePostCtrl', function($routeParams, $scope, posts) {
    $scope.chosenPost = posts.get($routeParams.postId);
    $scope.updatePost = function() {
        document.querySelector('.lonely').classList.toggle('editing');
        $('.lonely input, .lonely textarea').attr('disabled', 'disabled');
        $scope.chosenPost.date = new Date();
        posts.update($scope.chosenPost);
    };
    $scope.editPost = function() {
        document.querySelector('.lonely').classList.toggle('editing');
        $('.lonely input, .lonely textarea').removeAttr('disabled');
    };
    $scope.cancelEditing = function() {
        document.querySelector('.lonely').classList.toggle('editing');
        $('.lonely input, .lonely textarea').attr('disabled', 'disabled');
    };
});
