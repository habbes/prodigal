angular.module('app')
.factory('CaseService', ['$rootScope', function($rootScope){
    
    function randomId(){
        return Math.ceil(Math.random() * 100000000);
    }
    
    var cases = [
        {
            id: randomId(),
            image: 'http://placehold.it/180x180?text=Image+goes+here',
            name: 'Samuel',
            lastLocation: "Ongata Rongai",
            lastDate: new Date(),
            birthDate: new Date('1995-01-14'),
            description: "This is a test. This is a test. This is a test. This is a test."
            
        },
        
        {
            id: randomId(),
            image: 'http://placehold.it/180x180?text=Image+goes+here',
            name: 'Peter Ryath',
            lastLocation: "Nakumatt Lifestyle",
            lastDate: new Date(),
            birthDate: new Date('1987-04-25'),
            description: "This is a test. This is a test. This is a test. This is a test."
            
        },
        
        {
            id: randomId(),
            image: 'http://placehold.it/180x180?text=Image+goes+here',
            name: 'Lisa Mwaria',
            lastLocation: "Dagoretti Corner",
            lastDate: new Date(),
            birthDate: new Date('1990-03-21'),
            description: "This is a test. This is a test. This is a test. This is a test."
            
        },
        
        {
            id: randomId(),
            image: 'http://placehold.it/180x180?text=Image+goes+here',
            name: 'Joel Baraza',
            lastLocation: "ANU Main Campus",
            lastDate: new Date(),
            birthDate: new Date('1992-12-05'),
            description: "This is a test. This is a test. This is a test. This is a test."
            
        },
    ];
    
    function getCases(){
        return cases;
    }
    
    function addCase(c){
        cases.push(c);
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
        addCase: addCase,
        getAge: getAge,
    }
    
    
    
}])
.controller('CasesController', ['$scope', 'CaseService', function($scope, Case){
    
    $scope.Case = Case;
    $scope.cases = Case.getCases();
    console.log("HERE");
    
}]);