'use strict';

angular.module('yoBootstrapApp').controller('RacoonCtrl', function($rootScope, $scope, posts) {
    if(typeof $rootScope.articles === 'undefined'){
    	NProgress.start();
        $rootScope.articles = posts.all();
    }
    $scope.fillingForm = false;
    $scope.chosenPost = null;
    $scope.dataLoading = true;
});
