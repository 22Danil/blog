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

    this.registration = function () {
      $http.post('/registration', {name: $scope.Name, email: $scope.Email, password: $scope.Password})
        .then(function () {
            console.log("dsfdsfsd");
            $location.path("/");
        })
        .catch(function (result) {
            $scope.ErrorCode(result.status);
        });
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
