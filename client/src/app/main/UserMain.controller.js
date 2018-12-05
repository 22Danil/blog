export class MainUserController {
    constructor ($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
        'ngInject'

        //console.log(test);
        //localStorage.setItem('myKey', 'Value');
        //1console.log($location.search().name);
        //$scope.sample1=function(){

        $scope.nameUser = localStorage.getItem("Name")

        $scope.textForPost = "";

        //$scope.user_name = $location.search().name;
        $scope.addBook = function () {
            $http.post('/api/posts', {name: localStorage.getItem("Name")})
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

            console.log(tee[id-1]);
        };
        $scope.newPost = function () {
            let text = document.getElementsByClassName("addPost");
            if(text[0].textContent !== ""){
                $http.post('/api/addPost', {token: localStorage.getItem("Token"), textPost: text[0].textContent})
                    .then(function (result) {
                        console.log(result);
                    })
                    .catch(function (result) {
                       console.log(result);
                    });
            }

            //console.log(tee[0].textContent);
        }


    }
}
