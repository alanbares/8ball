(function() {
  'use strict';
  
  angular
    .module('app.8ball')
    .config(configFunction);
  
  configFunction.$inject = ['$routeProvider'];
  
  function configFunction($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/8ball/8ball.html'
    });
  }
})();