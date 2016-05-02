'use strict';

/* App Module */
/* registers modules and routes */

var flickrApp = angular.module('flickrApp', [
  'ngRoute',

  'flickrControllers'
]);

flickrApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/images', {
        templateUrl: 'partials/image-list.html',
        controller: 'ImageListCtrl'
      }).
      when('/images/:imageId', {
        templateUrl: 'partials/image-detail.html',
        controller: 'ImageDetailCtrl'
      }).
      otherwise({
        redirectTo: '/images'
      });
  }]);
