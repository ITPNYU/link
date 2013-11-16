'use strict';

angular.module('linkApp')
  .factory('Link', ['$resource', function($resource) {
    return $resource('http://localhost:5000/sim/link/:id', {id: '@id'},
      {
        query: {
          method: 'GET',
          transformResponse: function (data) {
            return JSON.parse(data).objects;
          },
          isArray: true
        }
      }
    );
  }])
  .factory('LinkLoader', ['Link', '$route', '$q', function(Link, $route, $q) {
    return function() {
      var delay = $q.defer();
      Link.get({id: $route.current.params.linkId}, function(link) {
        delay.resolve(link);
      });
      return delay.promise;
    };
  }])
  .factory('LinksLoader', ['Link', '$q', function(Link, $q) {
    return function() {
      var delay = $q.defer();
      Link.query(function(links) {
        delay.resolve(links);
      },
      function() {
        delay.reject('Unable to fetch links');
      });
      return delay.promise;
    };
  }]);
