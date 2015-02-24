'use strict';

angular.module('yoBootstrapApp').directive('blogPost', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/blog-post.html',
        controller: function($rootScope, $scope, posts) {
            $scope.removePost = function(post) {
                posts.delete(post._id);
                $rootScope.articles.splice($rootScope.articles.indexOf(post), 1);
            };
        }
    };
});