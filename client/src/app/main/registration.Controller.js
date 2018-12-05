export class MyRegistration {
  constructor ($timeout, friendsService, webDevTec, $http, $log, $scope, $location) {
    'ngInject'

      //$scope.Name = "";
      //$scope.Email = "";
      //$scope.Password = "";


    this.registration = function () {
      $http.post('http://localhost:8000/registration', {name: $scope.Name, email: $scope.Email, password: $scope.Password})
        .then(function (result) {


        })
        .catch(function (result) {
          //console.log(result)
          $log.log(result);
        });
        $location.path("/");

    };

  }
}
