'use strict';

/**
 * @ngdoc overview
 * @name mnFrontendTestApp
 * @description
 * # mnFrontendTestApp
 *
 * Main module of the application.
 */
angular
  .module('mnFrontendTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
