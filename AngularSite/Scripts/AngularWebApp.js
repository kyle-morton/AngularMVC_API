var AngularWebApp = angular.module('AngularWebApp', ['ngRoute']);
AngularWebApp.controller('BaseController', BaseController);
AngularWebApp.controller('LoginController', LoginController);
AngularWebApp.controller('RegisterController', RegisterController);
AngularWebApp.service('SessionService', SessionService);
AngularWebApp.factory('LoginFactory', LoginFactory);
AngularWebApp.factory('RegisterFactory', RegisterFactory);

var ConfigFunction = function($routeProvider) {
  $routeProvider
   .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController'
  });
};
ConfigFunction.$inject = ['$routeProvider'];
AngularWebApp.config(ConfigFunction);