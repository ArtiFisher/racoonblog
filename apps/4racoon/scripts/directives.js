'use strict';

var app = angular.module('yoBootstrapApp');

app.directive('image', function(image64) {
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

app.directive('instead', function() {
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

app.directive('blogPost', function() {
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

app.directive('popUp', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/pop-up.html',
        controller: function($scope, image64, posts) {
            // debugger;
            var article = {};
            // if($scope.chosenPost){
            //     article = $scope.chosenPost;
            //     $scope.title = $scope.chosenPost.title;
            //     $scope.author = $scope.chosenPost.author;
            //     $scope.url = $scope.chosenPost.url;
            //     $scope.text = $scope.chosenPost.text;
            // }
            // else {
            //     article = {};
            // }

            $scope.submitForm = function() {
                article.author = this.author;
                article.title = this.title;
                article.text = this.text;

                article.date = new Date();

                // article.image = $scope.image;
                if (!this.url) {
                    article.image = image64.image;
                } else {
                    article.image = this.url;
                }
                if ($scope.chosenPost) {
                    posts.update($scope.chosenPost, article);
                } else {
                    posts.add(article, $scope.articles);
                }

                // $scope.articles.push(article);

                this.author = '';
                this.title = '';
                this.text = '';
                $scope.fillingForm = false;
            };

            $scope.cancelFilling = function() {
                this.author = '';
                this.title = '';
                this.text = '';
                $scope.fillingForm = false;
            };
        }
    };
});
