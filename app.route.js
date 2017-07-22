app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'./components/login/loginView.html',
            controller:'loginCtrl'
        })
        .when('/login',{
            templateUrl:'./components/login/loginView.html',
            controller:'loginCtrl'
        })
        .when('/register',{
            templateUrl:'./components/register/registrationView.html',
            controller:'registrationCtrl'
        })
        .when('/admin',{
            templateUrl:'./components/admin/adminHomeView.html',
            controller:'adminCtrl',
        })
        .otherwise({
            redirectTo: '/login'
        })

    //$locationProvider.html5Mode(true);
});