export class MainUserController {
    constructor ($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
        'ngInject'

        //console.log(test);
        //localStorage.setItem('myKey', 'Value');
        //1console.log($location.search().name);
        //$scope.sample1=function(){

        $scope.nameUser = localStorage.getItem("Name");

        $scope.textForPost = "";
        $scope.textForTitle = "";
        $scope.countId = 0;

        //$scope.user_name = $location.search().name;
        $scope.addBook = function () {
            //console.log(localStorage.getItem("Token"));
            $http.post('/api/posts', {token: localStorage.getItem("Token")})
                .then(function (result) {
                    $scope.books = result.data;
                    console.log(result)
                })
                .catch(function (result) {
                    console.log(result)
                });
        };
        $scope.edit = function (id) {
            var tee = document.getElementsByClassName("multi-files"+id);
            console.log(id);
            console.log(tee[0].textContent);
        };
        $scope.newPost = function () {
            let text = document.getElementsByClassName("addPost");
            if(text[1].textContent !== ""){
                $http.post('/api/addPost', {token: localStorage.getItem("Token"), textPost: text[1].textContent, textTitle: $scope.textForTitle})
                    .then(function (result) {
                        if(result.data.status === "OK"){
                            $scope.addBook();
                        }
                    })
                    .catch(function (result) {
                       console.log(result);
                    });
            }

            //console.log(tee[0].textContent);
        };
        $scope.AllPost = function () {
            $http.post('/api/allPost', {token: localStorage.getItem("Token")})
                .then(function (result) {
                    $scope.books = result.data;
                })
                .catch(function (result) {
                   console.log(result);
                });
        };
        $scope.delPost = function (id) {
            let DelPost = document.getElementsByClassName("multi-files"+id);

            $http.post('/api/delPost', {token: localStorage.getItem("Token"), postID: id})
        };


    }
}
