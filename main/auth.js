angular.module('app')
.controller('LoginController', ['$scope', '$state', 'AuthService', function($scope, $state, Auth){
    
    
    
    $scope.$on('$stateChangeSuccess', function(){
        if(Auth.currentUser()){
            $state.go('main.cases');
        }
    });
    
    $scope.login = function(user){
        console.log('login called', user);
        if(Auth.login(user)){
            user= {};
            $state.go('main.cases');
        }
    }
    
}])
.controller('RegisterController', ['$scope', '$state', 'AuthService', function($scope, $state, Auth){
    
    $scope.$on('$stateChangeSuccess', function(){
        if(Auth.currentUser()){
            $state.go('main.cases');
        }
    });
    
    $scope.register = function(user){
        if(Auth.register(user)){
            user = {};
            $state.go('main.cases');
        }
    }
    
}])
;