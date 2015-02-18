'use strict';

var app = angular.module('yoBootstrapApp');

app.value('image64', {});

app.controller('RacoonCtrl', function($scope, posts) {
    NProgress.start();
    $scope.articles = posts.all();
    $scope.fillingForm = false;
    $scope.chosenPost = null;
    $scope.dataLoading = true;
});

app.controller('OnePostCtrl', function($routeParams, $scope, posts) {
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
