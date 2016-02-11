var BaseController = function($scope, SessionService){
    $scope.helloAgain = 'Hello Angular 1.3!';
    
    $scope.loggedIn = function(){
        // return SessionService.token !== undefined;
        return SessionService.getToken() !== undefined;
    }
    
    $scope.logout = function(){
        SessionService.setToken(undefined);
    }
}
BaseController.$inject = ['$scope', 'SessionService'];