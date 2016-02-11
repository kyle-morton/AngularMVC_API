var AngularWebApp = angular.module('AngularWebApp', ['ngRoute', 'ngCookies']);
AngularWebApp.controller('BaseController', BaseController);
AngularWebApp.controller('LoginController', LoginController);
AngularWebApp.controller('RegisterController', RegisterController);
AngularWebApp.controller('ValuesController', ValuesController);
AngularWebApp.service('SessionService', SessionService);
AngularWebApp.factory('LoginFactory', LoginFactory);
AngularWebApp.factory('RegisterFactory', RegisterFactory);
AngularWebApp.factory('GetValuesFactory', GetValuesFactory);

var ConfigFunction = function($routeProvider) {
  $routeProvider
   .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController'
  })
  .when('/values',{
    templateUrl: 'views/values.html',
    controller: 'ValuesController'
  });
};
ConfigFunction.$inject = ['$routeProvider'];
AngularWebApp.config(ConfigFunction);