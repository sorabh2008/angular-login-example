app.controller('adminCtrl',['$scope','Quest_Service', function($scope, Quest_Service){

    //ACCORDION
    $scope.oneAtATime = true;

      $scope.groups = [
        {
          title: 'Dynamic Group Header - 1',
          content: 'Dynamic Group Body - 1'
        },
        {
          title: 'Dynamic Group Header - 2',
          content: 'Dynamic Group Body - 2'
        }
      ];

      $scope.items = ['Item 1', 'Item 2', 'Item 3'];

      $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
      };

      $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
      };


    //QUESTIONS
    $scope.questions = Quest_Service.getQuest();
    $scope.selectedQuestionCount=0;
    $scope.toggleSelectionCounter = function(quest){
        if(quest.check){
            $scope.selectedQuestionCount++;
        }else{
            $scope.selectedQuestionCount--;
        }
    };
}]);