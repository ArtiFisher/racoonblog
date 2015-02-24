'use strict';

var app = angular.module('yoBootstrapApp');

app.service('posts', function($resource) {
    var Post = $resource('http://54.72.3.96:3000/posts/:_id', {}, {
        update: {
            method: 'PUT'
        }
    });

    this.add = function(content, articles) {
        var newPost = new Post();
        for (var prop in content) {
            newPost[prop] = content[prop];
        }
        newPost.$save(function(addedPost) {
            content._id = addedPost._id;
            articles.push(content);
        });
    };

    this.all = function() {
        return Post.query(function() {
            NProgress.done();
        });
    };

    this.get = function(id) {
        return Post.get({
            _id: id
        });
    };

    this.update = function(upDate) {
        Post.update({
            _id: upDate._id
        }, upDate);
    };
    
    this.delete = function(id) {
        Post.delete({
            _id: id
        });
    };
});
