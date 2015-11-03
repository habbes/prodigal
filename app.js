angular.module('app', ['underscore.string', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/'
    })
    .state('main', {
        url: '/main',
        templateUrl: '/main/main.html',
    })
    .state('main.login', {
        url: '/login',
        templateUrl: '/main/login.html',
    })
    .state('main.register', {
        url: '/register',
        templateUrl: '/main/register.html'
    })
    .state('main.cases', {
        url: '/cases',
        templateUrl: '/main/cases.html',
        controller: 'CasesController'
    })
    .state('main.case', {
        url: '/cases/:caseId'
    })
    .state('main.new-case', {
        url: '/new-case',
        templateUrl: 'main/new-case.html'
    })
    ;
    
    
}])
;