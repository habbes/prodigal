angular.module('app')
.factory('AuthService', ['$rootScope', function($rootScope){
    
    var users = [{
        firstName: 'Haby',
        lastName: 'Habbes',
        email: 'habbes@mailer.com',
        phone: '0711223344',
        idNumber: '12345678',
        password: 'mypass'
    }];
    
    function findByUsername(username){
        console.log('searching users', username);
        var user = _.find(users, function(user){
            return (user.email == username
                    || user.phone == username
                    || user.idNumber == username);
        });
        
        return user;
    }
    
    function register(user){
        if(findByUsername(user.email) ||
          findByUsername(user.phone) ||
          findByUsername(user.idNumber)){
            return null;
        }
            
        users.push(user);
        $rootScope.user = user;
        return user;
    }
    
    function login(u){
        console.log('login request', u);
        var user = findByUsername(u.username);        
        if(!user) return null;
        console.log('user found', user);
        if(user.password != u.password)
            return null;
        console.log('pasword matched');
        
        if(user){
            $rootScope.user = user;
        }
        
        return user;
    }
        
    function logout(){
        $rootScope.user = null;
    }
        
    function currentUser(){
        return $rootScope.user;
    }
        
    return {
        findByUsername: findByUsername,
        register: register,
        login: login,
        logout: logout,
        currentUser: currentUser,
    };
    
    
    
}]);