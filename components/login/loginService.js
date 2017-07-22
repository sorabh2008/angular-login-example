app.service('AuthService',['$http', 'Session', function($http, Session){
    this.authenticate = function(credentials){
        return $http
          .post('/login', credentials)
          .then(function (res) {
            Session.create(res.data.id, res.data.user.id,
                           res.data.user.role);
            return res.data.user;
        });
    };

    this.isAuthenticated = function(){
        return !!Session.userId;
    };

    this.isAuthorized = function(role){
        if (!angular.isArray(role)) {
            role = [role];
        }
        return
            (authService.isAuthenticated() && role.indexOf(Session.userRole) !== -1);
    };
}])
.service('Session', function () {
  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
});