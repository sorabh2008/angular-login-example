app.controller('registrationCtrl',['$scope','$location', 'doRegister', function($scope, $location, doRegister){
    $scope.displayText="Register here";

    $scope.user = {
        project: '',
        organization: {
            nameOfOrg:'',
            address: '',
            phone:'',
            email:'',
            webAddress: '',
            pointOfContact:{
                name:'',
                mobile: '',
                email:''
            },
            cin:''
        },
        coordinator:{
            name:'',
            gender:'',
            age:'',
            email:'',
            mobile:'',
            otp:''
        },
        role:'',
        name:''
    };

    $scope.register = function(user){
        doRegister.register(user);
        var currentUser={
            name:user.name,
        };
        console.log("current user:"+currentUser.name);
        $scope.$parent.setCurrentUser(currentUser);
        $location.path('/admin');
    };
}]);