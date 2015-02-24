'use strict';

angular.module('yoBootstrapApp').filter('highlight', function($sce) {
    return function(text, phrase) {
      if(phrase){
      	text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<mark class="bg-danger">$1</mark>');
      }
      return $sce.trustAsHtml(text)
    }
  });