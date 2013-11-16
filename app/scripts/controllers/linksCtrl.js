'use strict';

angular.module('linkApp')
  .controller('LinksCtrl', ['$scope', 'links', function($scope, links) {
    $scope.links = links;
  }
]);
