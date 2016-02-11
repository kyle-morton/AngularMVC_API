var LoginController = function($scope, $location, LoginFactory, SessionService){
    $scope.loginForm = {
        username: undefined,
        password: undefined, 
        errorMessage: ''
    };
    
    $scope.login = function(){
        LoginFactory($scope.loginForm.username, $scope.loginForm.password)
        .then(function(response){
            SessionService.token = response.access_token;
            $location.path('/');
        }, function(response){
            if (!(response === undefined || response === null)){
                $scope.loginForm.errorMessage = response.error_description;
            }
                
        });
    }
    
}
LoginController.$inject = ['$scope', '$location', 'LoginFactory', 'SessionService'];