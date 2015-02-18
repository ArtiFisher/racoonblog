'use strict';

angular.module('yoBootstrapApp').controller('RacoonCtrl', function($scope, posts) {
    NProgress.start();
    $scope.articles = posts.all();
    $scope.fillingForm = false;
    $scope.chosenPost = null;
    $scope.dataLoading = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.articles = posts.all();
    });
});
