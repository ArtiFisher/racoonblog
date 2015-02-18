'use strict';

angular.module('yoBootstrapApp').directive('popUp', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/pop-up.html',
        controller: function($scope, image64, posts) {
            // debugger;
            var article = {};

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

                posts.add(article, $scope.articles);

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
