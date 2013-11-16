'use strict';

angular.module('linkApp', ['ngResource', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/link/:linkId', {
        templateUrl: 'views/link.html',
        controller: 'LinkCtrl',
        resolve: {
          link: function(LinkLoader) {
            return new LinkLoader();
          }
        },
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl',
        resolve: {
          links: function(LinksLoader) {
            return new LinksLoader();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
