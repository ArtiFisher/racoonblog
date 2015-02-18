'use strict';

angular.module('yoBootstrapApp').directive('blogPost', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/blog-post.html',
        controller: function($scope, posts) {
            $scope.removePost = function(post) {
                posts.delete(post._id);
                $scope.articles.splice($scope.articles.indexOf(post), 1);
            };
        }
    };
});