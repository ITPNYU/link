'use strict';

angular.module('linkApp')
  .controller('LinkCtrl', ['$scope', 'link', function($scope, link) {
    $scope.link = link;
  }])
  .controller('LinksCtrl', ['$scope', 'links', function($scope, links) {
    $scope.links = links;
  }
]);