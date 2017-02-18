'use strict';

angular.module('templateApp')
  .directive('myDirective', function() {
    return {
      template: "This is my custom directive",
      restrict: "A" // restricting directive to an Attribute only
    };
  })
