export class MyRegistration {
  constructor ($timeout, friendsService, webDevTec, $http, $log, $scope, $location) {
    'ngInject'

      //$scope.Name = "";
      //$scope.Email = "";
      //$scope.Password = "";
      $scope.err_log = "";


    this.registration = function () {
      $http.post('/registration', {name: $scope.Name, email: $scope.Email, password: $scope.Password})
        .then(function (result) {
            if (result.data === "error_login") {
                $scope.err_log = "Такой логин уже занят!";
            }
            else{
                $location.path("/");
            }

        })
        .catch(function (result) {
          //console.log(result)
          $log.log(result);
        });
        //$location.path("/");

    };

  }
}
