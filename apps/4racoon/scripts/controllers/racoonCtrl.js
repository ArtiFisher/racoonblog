'use strict';

var app = angular.module('yoBootstrapApp');

app.value('image64', {});

app.controller('RacoonCtrl', function($scope, $http, $resource, image64) {
    // $http.get('../../resources/2articles.json').success(function(data) {
    $http.get('http://54.72.3.96:3000/posts').success(function(data) {
        $scope.articles = data;
    });
    
    $scope.isCreating = false;
});

app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

app.directive('image', function(image64) {
    return {
        restrict: 'A',
        scope: {},
        link: function(scope, element, attrs) {
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
        			image64.image = "";
                }
            })
        }
    }
});

app.directive('instead', function() {
    return {
        restrict: 'A',
        scope: {},
        link: function(scope, element, attrs) {
            element.click(function() {
                var checked = document.getElementById(attrs.of).checked;
                document.getElementById(attrs.of).checked = !checked;
            })
        }
    }
});

app.directive('blogPost', function() {
    return {
        restrict: 'E',
        templateUrl:'views/blog-post.html',
        controller: function($scope, $resource, Post){
            $scope.removePost = function(id) {
                console.log(id);
                // var post = $resource('http://54.72.3.96:3000/posts/5460cafdfef38b74188ed00e');
                // .get(function() {
                //     console.log(post._id);
                //     console.log(post.title);
                //     console.log(post.author);
                //     // user.$save();
                // });
                // debugger;
                var post = Post.get({_id:id}, function(){
                    console.log(post._id);
                });

            }
        }
    }
});

app.factory("Post", function($resource) {
  return $resource('http://54.72.3.96:3000/posts/:_id');
});

app.service('');

app.directive('popUp', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/pop-up.html',
        controller: function($scope, $http, $resource, image64) {

            $scope.submitForm = function() {
                var article = {};
                article.author = this.author;
                article.title = this.title;
                article.text = this.text;

                // future filter

                // var date = new Date();
                // var options = {
                //     hour: "2-digit",
                //     minute: "2-digit",
                //     hour12: false,
                //     year: "numeric",
                //     month: "short",
                //     day: "numeric"
                // };
                // var now = date.toLocaleTimeString("en-us", options).split(', ');
                // article.date = now[2] + " " + now[0] + ", " + now[1];

                article.date = new Date();

                // article.image = $scope.image;
                if(!this.url){
                    article.image = image64.image;
                }
                else {
                    article.image = this.url;
                }
                debugger;

                $scope.articles.push(article);

                $http.post('http://54.72.3.96:3000/posts', article).
                  success(function(data, status, headers, config) {
                    console.log('posted');
                  }).
                  error(function(data, status, headers, config) {
                    console.log('error');
                  });

                this.author = '';
                this.title = '';
                this.text = '';
                $scope.isCreating = false;
            }

            $scope.cancelCreating = function() {
                this.author = '';
                this.title = '';
                this.text = '';
                $scope.isCreating = false;
            }
        }
    }
});