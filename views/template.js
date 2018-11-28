var app = angular.module('app',[]);

app.controller('myCtrl', function ($http, $scope) {
    $scope.title = "Вход";
    $scope.Name = "";
    $scope.Email = "";
    $scope.Password = "";
    $scope.err_log = "";
    $scope.err_pas = "";

    $scope.entry = function () {
        $http.post('http://localhost:2000/entry',{name:$scope.Name, email:$scope.Email, password:$scope.Password })
            .then(function (result) {
                //$scope.books = result.data;
                //console.log(result);
                $scope.err_log = "";
                $scope.err_pas = "";
                if(result.data === "error_login"){
                    $scope.err_log = "Сначала нужно зарегистрироваться!";
                }
                else if(result.data === "error_password"){
                    $scope.err_pas = "Неверный пароль!";
                }
                else{

                }
            })
            .catch(function (result) {
                console.log(result)
            });
    };

    $scope.registration = function () {
        $http.get('http://localhost:2000/entryOrRegistration')
            .then(function (result) {
                console.log(result.data);
                return result.data;
            })
            .catch(function (result) {
                console.log(result)
            });
    }

});