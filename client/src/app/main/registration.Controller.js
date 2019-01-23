export class MyRegistration {
  constructor ($timeout, friendsService, webDevTec, $http, $log, $scope, $location) {
    'ngInject'

      $scope.Name = "";
      $scope.Email = "";
      $scope.Password = "";

      $scope.Header = "";
      $scope.textBody = "";
        let modal = document.getElementById('myModal');
        let span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
        modal.style.display = "none";
        $scope.Header = "";
        $scope.textBody = "";
        };
    $scope.checkEmail = function (email) {
        let pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    };
      this.registration = function () {
        //$scope.Email.indexOf("@") !== -1 && $scope.Email.indexOf(".") !== -1
        if($scope.checkEmail($scope.Email)){
            $http.post('/registration', {name: $scope.Name, email: $scope.Email, password: $scope.Password})
                .then(function () {
                    $location.path("/");
                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
                });
        }

      };
      $scope.ErrorCode = function (statusCode) {
          if(statusCode === 401){
              $scope.Header = "Error: " + statusCode;
              $scope.textBody = "Неверный логин или пароль!";
              modal.style.display = "block";
          }
      };
  }
}
