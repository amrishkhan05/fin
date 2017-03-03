app.controller('loginController',function ($scope,$rootScope,$http,$location) {
        $scope.records = {
            userName: "",
            password: ""
        };


        
  
   $scope.isShow = true;
  $scope.tabName = "tab1";
  $scope.IsHidden=false;
  $scope.IsHidden2=false;
  $scope.IsHidden3=false;
  $scope.IsHidden4=false;
        $scope.login_user = function (data) {
            $scope.name = $scope.records.userName;
    $scope.password = $scope.records.password;
    $scope.designation ="" ;
    
            if($scope.password=="Pass123" && $scope.name=="Ramya")
                {
                    $rootScope.user=$scope.name;
                      $rootScope.dtn="HR-Manager"
                      console.log( $rootScope.user)
                      console.log( $rootScope.dtn)
                     
                     $rootScope.tab_1=false;
                    $rootScope.tab_2=false;
                    $rootScope.tab_3=false;
                     $location.path('/mainpage');
                }
             else if($scope.password=="Pass123" &&$scope.name=="Raja")
            {       $rootScope.user="Raja"
                      $rootScope.dtn= "HR-Staff"
                    console.log($scope.name)
                    console.log($scope.password)
                    $rootScope.tab_1=true;
                    $rootScope.tab_2=false;
                    $rootScope.tab_3=false;

                     $location.path('/mainpage');
            }
             else if($scope.password=="Pass123" &&$scope.name=="Ravi")
            { $rootScope.user="Ravi"
                      $rootScope.dtn="Manager"
                   
                     console.log($scope.name)
                     console.log($scope.password)
                    $rootScope.tab_1=true;
                    $rootScope.tab_2=false;
                    $rootScope.tab_3=false;

                     $location.path('/mainpage');
            }

        	  else if($scope.password!="Pass123" &&$scope.name!="Ravi")
            {
                    

               $location.path('/cilayout');
            }
        
            }


     $scope.ShowHide=function() {

    $scope.IsHidden=$scope.IsHidden ? false : true;
  }

    $scope.ShowHide2=function() {
    $scope.IsHidden2=$scope.IsHidden2 ? false : true;
  }
    $scope.ShowHide3=function() {

    $scope.IsHidden3=$scope.IsHidden3 ? false : true;
  }
    $scope.ShowHide4=function() {

    $scope.IsHidden4=$scope.IsHidden4 ? false : true;

};

        
    });