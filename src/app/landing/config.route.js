(function() {
  'use strict';
  
  angular
    .module('app.8ball')
    .config(configFunction);
  
  configFunction.$inject = ['$routeProvider'];
  
  function configFunction($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/landing/8ball.html',
      controller: 'eightBallController',
      controllerAs: 'vm'
    });
  }
})();