angular.module('app')
.factory('CaseService', ['$rootScope', function($rootScope){
    
    function randomId(){
        return Math.ceil(Math.random() * 100000000);
    }

    var cases = [];

    for(var i = 0; i < 10; ++i){

        var id = chance.guid();
        var name = chance.name();
        var image = 'http://placehold.it/180x180?text=' + encodeURIComponent(name);
        var lastLocation = chance.street();
        var thisYear = (new Date()).getFullYear();
        var lastDate = chance.date({year: thisYear});
        var birthDate = chance.birthday();
        var description = chance.paragraph();
        var info = [];
        for(var j = 0; j < 10; j++){
            var infoTime = chance.date();
            var infoTitle = chance.sentence();
            var infoDescr = chance.paragraph();
            info.push({
                time: infoTime,
                title: infoTitle,
                description: infoDescr
            });
        }

        cases.push({
            id: id,
            image: image,
            name: name,
            lastLocation: lastLocation,
            lastDate: lastDate,
            birthDate: birthDate,
            description: description,
            info: info
        });


    }
    
    function getCases(){
        return cases;
    }
    
    function getCase(id){
        return _.find(cases, function(c){ return c.id == id});
    }
    
    function addCase(c){
        c.image = 'http://placehold.it/180x180?text=' + encodeURIComponent(c.name);
        c.id = randomId();
        c.info = [];
        c.birthDate = new Date(c.birthDate);
        c.lastDate = new Date(c.lastDate);
        cases.unshift(c);
        try{
            $rootScope.$digest();
        }
        catch(err){}
    }
    
    function getAge(c){
        var ageDifMs = Date.now() - c.birthDate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    return {
        cases: cases,
        getCases: getCases,
        getCase: getCase,
        addCase: addCase,
        getAge: getAge,
    }
    
    
    
}])
.controller('CasesController', ['$scope', 'CaseService', function($scope, Case){
    
    $scope.Case = Case;
    $scope.cases = Case.getCases();
    console.log("HERE");
    
}])
.controller('CaseController', ['$scope', '$stateParams', 'CaseService', function($scope, $stateParams, Case){
    $scope.Case = Case;
    $scope.case = Case.getCase($stateParams.caseId);
    $scope.submitInfo = function(info){
        info.time = new Date();
        $scope.case.info.unshift(info);
        $scope.newInfo = {};
    };
    
}])
.controller('NewCaseController', ['$scope', '$state', 'AuthService', 'CaseService', function($scope, $state, Auth, Case){
    if(!Auth.currentUser()){
        $state.go('main.login');
    }

    $scope.addCase = function(c){
        Case.addCase(c);
        $state.go('main.cases');
    };
    
    
}])
;