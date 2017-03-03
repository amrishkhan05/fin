app.controller('resourceRequestController',function ($scope, $http) {
    $scope.addContact = function () {
      console.log($scope.contact);
      $http.post("/employeedetail", $scope.contact).then(function (response) {
        console.log(response.data);
        refresh();
      })
    }
    var refresh = function () {
      $http.get("/employeedetail").then(function (response) {
        $scope.employeedetail = response.data;
        console.log($scope.employeedetail);
      })
    }
    refresh();
    $scope.update = function (id) {
      console.log($scope.contact._id);
      $http.put('/employeedetail/' + $scope.contact._id, $scope.contact).then(function (response) {
        refresh();
      });
    };
    $scope.edit = function (id) {
      console.log(id);
      $http.get('/employeedetail/' + id).then(function (response) {
        $scope.contact = response.data;
        console.log($scope.contact);
      });
    };
  }
);