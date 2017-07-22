var app=angular.module('csrApp',['ngRoute']);

app.controller('ApplicationController',
    ['$scope', 'USER_ROLES', 'AuthService',
    function ($scope,USER_ROLES,AuthService) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
            console.log("in parent controller - current user:"+$scope.currentUser.name+", role:"+$scope.currentUser.role);
        };
}]);

app.constant('AUTH_EVENTS',{
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});

app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    organization: 'organization',
    coordinator: 'coordinator'
});