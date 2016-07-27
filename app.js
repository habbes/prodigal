angular.module('app', ['underscore.string', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/main/cases');
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/home/home.html',
        controller: ['$state', function($state){
            $state.go('main.cases');
        }]
    })
    .state('main', {
        url: '/main',
        templateUrl: '/main/main.html',
    })
    .state('main.login', {
        url: '/login',
        templateUrl: '/main/login.html',
        controller: 'LoginController'
    })
    .state('main.register', {
        url: '/register',
        templateUrl: '/main/register.html',
        controller: 'RegisterController'
    })
    .state('main.cases', {
        url: '/cases',
        templateUrl: '/main/cases.html',
        controller: 'CasesController'
    })
    .state('main.case', {
        url: '/cases/:caseId',
        templateUrl: '/main/case.html',
        controller: 'CaseController'
    })
    .state('main.new-case', {
        url: '/new-case',
        templateUrl: 'main/new-case.html',
        controller: 'NewCaseController'
       
    })
    ;
    
    
    
    
}])
.run(['$rootScope', '$state', 'AuthService', function($rootScope, $state, Auth){
    $rootScope.$on('$viewContentLoaded', fixHeight);
    $rootScope.searchTerm = "";
    $rootScope.logout = Auth.logout;
    $rootScope.showCases = function(){
        $state.go('main.cases');
    };
}])
;