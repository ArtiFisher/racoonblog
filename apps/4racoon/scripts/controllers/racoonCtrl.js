'use strict';

var app = angular.module('yoBootstrapApp');

app.value('image64', {});

app.controller('RacoonCtrl', function($scope, posts) {
    $scope.articles = posts.all();
    $scope.fillingForm = false;
    $scope.editedPost = null;
});

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
                if (items[i].author == 'arti') {
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
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            year: "numeric",
            month: "short",
            day: "numeric"
        };
        var date = new Date(input);
        var now = date.toLocaleTimeString("en-us", options).split(', ');
        return now[2] + " " + now[0] + ", " + now[1];
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
        templateUrl: 'views/blog-post.html',
        controller: function($scope, posts) {
            $scope.removePost = function(post) {
                posts.delete(post._id);
                $scope.articles.splice($scope.articles.indexOf(post), 1);
            }
            $scope.updatePost = function(post) {
                posts.delete(post._id);
                $scope.articles.splice($scope.articles.indexOf(post), 1);
                posts.update(post, {
                    text: 'new text2',
                    author: 'arti',
                    title: 'new title2',
                    date: new Date()
                });
            }
            $scope.editPost = function(post){
                debugger;
                $scope.$parent.editedPost = post; 
                $scope.$parent.fillingForm = true;
            }
        }
    }
});

// app.factory("Posts", function($resource) {
//     return $resource('http://54.72.3.96:3000/posts/:_id');
// });

app.service('posts', function($resource, $http) {
    this.add = function(content, articles) {
        var Post = $resource('http://54.72.3.96:3000/posts/', {});
        var newPost = new Post();
        for (var prop in content) {
            newPost[prop] = content[prop];
        }
        newPost.$save(function(u) {
            content._id = u._id;
            articles.push(content);
        });
    }

    this.all = function(array) {
        return $resource('http://54.72.3.96:3000/posts').query();
    }

    this.get = function(id) {
        return $resource('http://54.72.3.96:3000/posts/:_id').get({
            _id: id
        });
    }

    this.update = function(post, upDate) {
        // var post = $resource('http://54.72.3.96:3000/posts/:_id', {
        //     update: {
        //         method: 'PUT'
        //     }
        // });
        // post.get({
        //         _id: upDate._id
        //     },
        //     function() {
        //         debugger;
        //         for (var prop in upDate) {
        //             if (prop != '_id') {
        //                 post[prop] = upDate[prop];
        //             }
        //         }
        //         post.update({
        //             _id: upDate._id
        //         });
        //     });

        $http.put('http://54.72.3.96:3000/posts/' + post._id, upDate)
        .success(function(){
            debugger;
            // var getted = $resource('http://54.72.3.96:3000/posts/:_id').get({
            //     _id: post._id
            // });
            // var index = articles.findIndex(function(element){
            //     if(element._id == post._id){
            //         return true;
            //     }
            //     else{
            //         return false;
            //     }

            // });
            // articles.slice(index, 1, getted);
            
        });
    }



    this.delete = function(id) {
        $resource('http://54.72.3.96:3000/posts/:_id').delete({
                _id: id
            });
    }
});

app.directive('popUp', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/pop-up.html',
        controller: function($scope, image64, posts) {
            debugger;
            var article = {};
            // if($scope.editedPost){
            //     article = $scope.editedPost;
            //     $scope.title = $scope.editedPost.title;
            //     $scope.author = $scope.editedPost.author;
            //     $scope.url = $scope.editedPost.url;
            //     $scope.text = $scope.editedPost.text;
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
                debugger;
                if($scope.editedPost){
                    posts.update($scope.editedPost, article);
                }
                else{
                    posts.add(article, $scope.articles);
                }

                // $scope.articles.push(article);

                this.author = '';
                this.title = '';
                this.text = '';
                $scope.fillingForm = false;
            }

            $scope.cancelFilling = function() {
                this.author = '';
                this.title = '';
                this.text = '';
                $scope.fillingForm = false;
            }
        }
    }
});
