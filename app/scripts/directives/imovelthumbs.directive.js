'use strict';

/**
 * @ngdoc directive
 * @name mnFrontendTestApp.directive:imovelThumbs.directive
 * @description
 * # imovelThumbs.directive
 */
angular.module('mnFrontendTestApp')
  .directive('imovelThumbs', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/main.html',
      /*link: function postLink(scope, element, attrs) {
        element.text('this is the imovelThumbs.directive directive');
      }*/
    };
  });
