export class MyController {
    constructor ($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
      'ngInject'

      //let that = this;
      this.title = "Вход";
      //this.Name = "";
      //this.Email = "";
      //this.Password = "";
        $scope.err_log = "";
        $scope.err_pas = "";

      this.entry = function () {
        $http.post('http://localhost:8000/entry', {name: $scope.Name, email: $scope.Email, password: $scope.Password})
          .then(function (result) {
            //$scope.books = result.data;
            //console.log(result);
            //this.err_log = "";
            //this.err_pas = "";
            if (result.data === "error_login") {
                $scope.err_log = "Сначала нужно зарегистрироваться!";
            }
            else if (result.data === "error_password") {
                $scope.err_pas = "Неверный пароль!";
            }

          })
          .catch(function (result) {
            //console.log(result)
            $log.log(result);
          });
      };

      this.registration = function () {
        $location.path("/registration");
        /*
        $http.get('http://localhost:2000/entryOrRegistration')
          .then(function (result) {
            $log.log(result.data);
          })
          .catch(function (result) {
            $log.log(result);
          });
        */

      }
    }
}