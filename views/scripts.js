var app = angular.module('app',[]);
/*
$http.get('http://localhost:8000/books').then(data => {
   console.log(data);
   $scope.books = data;
})
*/

app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

app.controller('myCtrl', function ($http, $scope, $location) {
    //console.log(test);
    //localStorage.setItem('myKey', 'Value');
    //1console.log($location.search().name);
    //$scope.sample1=function(){

    $http.get('http://localhost:2000/token')
        .then(function (result1) {
            console.log('sucess', result1);
            $scope.tokenUser = result1.data.token;
            $scope.nameUser = result1.data.Name;
        })
        .catch(function (result) {
            console.log(result)
        });

    $scope.user_name = $location.search().name;
    $scope.addBook = function () {
        $http.get('http://localhost:2000/posts', {params: {name: $location.search().name}})
            .then(function (result) {
                $scope.books = result.data;
                console.log(result)
            })
            .catch(function (result) {
                console.log(result)
            });
    };
    $scope.edit = function (id) {
        var tee = document.getElementsByClassName("multi-files");

        console.log(tee);
    }


});