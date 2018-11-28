var app = angular.module('app',[]);

app.controller('myCtrl', function ($scope) {
    $scope.title = "Вход";
    $scope.test = "";

    $scope.entry = function () {
        $http.post('http://localhost:2000/entry', {params: {name: "", password: "", email: ""}})
            .then(function (result) {
                $scope.books = result.data;
                console.log(result)
            })
            .catch(function (result) {
                console.log(result)
            });
    };

});