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
        $scope.test = "true";

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
        $scope.editPost = function (id) {
            var editPost = document.getElementsByClassName("multi-files"+id);
            //console.log(id);
            //console.log(tee[0].textContent);
            $http.post('/api/editPost', {token: localStorage.getItem("Token"), postID: id})
                .then(function (result) {
                    if(result.data.status === "OK"){
                        console.log(editPost[0].attributes);
                        /*
                        let test = () => {
                            editPost[0].disabled = "false";
                            $scope.test = "false";
                        }
                        */
                        //$scope.$apply(test());
                        $scope.test = "false";
                        editPost[0].attributes.removeNamedItem("disabled");
                        //editPost[0].disabled.remove();
                        console.log("asddfsfgd");
                        //console.log(editPost[0].querySelector(""));
                        //console.log(editPost[0].getAttribute('disabled'));
                        //console.log(editPost[0].);
                    }
                })
                .catch(function (result) {
                    console.log(result);
                });
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
                .then(function (result) {
                    if(result.data.status === "OK"){
                        $scope.addBook();
                    }
                })
                .catch(function (result) {
                    console.log(result);
                });
        };


    }
}
