'use strict';

/* Controllers for the flickr tag search views*/

var flickrControllers = angular.module('flickrControllers', []);

flickrControllers.controller('ImageListCtrl', ['$scope', '$http',
  function($scope, $http) {

    // There may be a better way to handle this with the callback that the flickr api returns instead of passing in "nojsoncallback"
    $scope.searchTags = function() {
      $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=463540e656a5a8e16aa3b22a0a7fb0d3&tags=" + $scope.tagQuery + "&extras=tags%2C+url_t&format=json&nojsoncallback=1").success(function(data) {
        $scope.images = data.photos.photo;
      });
    }

    //TODO: A function to do a similar call as above that includes a page number; would be called by a component to allow the user to traverse the result pages
    // The above api call takes a "page" parameter to specify the page
  }]);

flickrControllers.controller('ImageDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=463540e656a5a8e16aa3b22a0a7fb0d3&photo_id=" + $routeParams.imageId + "&format=json&nojsoncallback=1").success(function(data) {
      $scope.imageDetail = data.photo;
    });
  }]);
