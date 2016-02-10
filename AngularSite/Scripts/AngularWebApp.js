var AngularWebApp = angular.module('AngularWebApp', []);
AngularWebApp.controller('BaseController', BaseController);
AngularWebApp.service('SessionService', SessionService);
AngularWebApp.factory('LoginFactory', LoginFactory);
AngularWebApp.factory('RegisterFactory', RegisterFactory);