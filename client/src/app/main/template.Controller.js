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
        $http.post('api/entry', {name: $scope.Name, email: $scope.Email, password: $scope.Password})
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
            else{
                localStorage.setItem('Token', result.data.token);
                localStorage.setItem('Name', result.data.name);

                $location.path("/main");
                //console.log(result.data);
            }

          })
          .catch(function (result) {
            //console.log(result)
            $log.log(result);
          });
      };

      this.registration = function () {
        $location.path("/registration");

      }
    }
}