
app.controller('loginCtrl',
    ['$scope', '$rootScope', '$location', 'AuthService', 'AUTH_EVENTS',
    function($scope, $rootScope, $location, AuthService, AUTH_EVENTS){

        $scope.credentials={
            user_id:'',
            password:''
        };
        $scope.login = function(credentials){
            console.log("logging in user-"+credentials.user_id+", with password-"+credentials.password);
            var currentUser={
                name:credentials.user_id,
                email:credentials.user_id
            };
            $scope.$parent.setCurrentUser(currentUser);
            $location.path('/admin');
            /*AuthService.authenticate(credentials)
                .then(function (user){
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    $scope.setCurrentUser(user);
                },function(){
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });*/

        };
    }]
);