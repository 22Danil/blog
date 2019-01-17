export class MyController {
    constructor ($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
      'ngInject'


        let modal = document.getElementById('myModal');
        let span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
            $scope.Header = "";
            $scope.textBody = "";
        };

      this.entry = function () {
        $http.post('/entry', {name: $scope.Name, email: $scope.Email, password: $scope.Password})
          .then(function (result) {
              localStorage.setItem('Token', result.data.token);
              localStorage.setItem('Name', result.data.name);
              localStorage.setItem('Id', result.data.id);
              $location.path("/main");
          })
          .catch(function (result) {
              $scope.ErrorCode(result.status);
          });
      };
      this.registration = function () {
        $location.path("/registration");
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