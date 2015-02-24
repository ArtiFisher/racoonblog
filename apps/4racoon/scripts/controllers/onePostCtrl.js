'use strict';

angular.module('yoBootstrapApp').controller('OnePostCtrl', function($rootScope, $routeParams, $scope, posts) {
    // $scope.chosenPost = posts.get($routeParams.postId);
    if(typeof $rootScope.articles === 'undefined'){
        $scope.chosenPost = posts.get($routeParams.postId);
        $rootScope.articles = posts.all();
    }
    else{
        for (var i = 0; i < $rootScope.articles.length; i++){
            //maybe pass an object with an index field
            if($rootScope.articles[i]._id === $routeParams.postId){
                $scope.index = i;
                break;
            }
        }
        $scope.chosenPost = $rootScope.articles[$scope.index];
    }
    $scope.updatePost = function() {
        document.querySelector('.lonely').classList.toggle('editing');
        $('.lonely input, .lonely textarea').attr('disabled', 'disabled');
        $scope.chosenPost.date = new Date();
        posts.update($scope.chosenPost);
        $rootScope.articles[$scope.index] = $scope.chosenPost;
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