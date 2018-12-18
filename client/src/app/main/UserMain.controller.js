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
        $scope.textForSearch = "";
        $scope.countId = 0;
        $scope.test = "true";
        let postEditId;
        let postEditText;

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
            let editPost = document.getElementsByClassName("multi-files"+id);
            postEditId = id;
            postEditText = editPost[0].textContent;

            $http.post('/api/editPost', {token: localStorage.getItem("Token"), postID: id})
                .then(function (result) {
                    if(result.data.status === "OK"){
                        console.log(editPost[0].disabled);//[0].attributes
                        //$scope.test = "false";//ng-disabled="{{test}}"
                        editPost[0].attributes.removeNamedItem("disabled");
                    }
                })
                .catch(function (result) {
                    console.log(result);
                });
        };
        $scope.savePost = function(id){
            let savePost = document.getElementsByClassName("multi-files"+id);
            if(id !== postEditId){
                console.log("id несовпали!")
            }
            else if(savePost[0].textContent === postEditText){
                console.log("Вы ничего не изменили!")
            }
            else{
                $http.post('/api/savePost',{token: localStorage.getItem("Token"), newText: savePost[0].textContent, postID: id})
                    .then(function (result) {
                        if(result.data.status === "OK"){
                            //$scope.addBook();
                            savePost[0].disabled = true;
                        }
                        else{
                            console.log("Ошибка добавления!");
                        }
                    })
                    .catch(function (result) {
                        console.log(result);
                    })
            }
            //console.log(savePost[0].textContent);
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

        };
        $scope.AllPost = function () {
            $http.post('/api/allPost', {token: localStorage.getItem("Token")})
                .then(function (result) {
                    console.log(result.data);
                    $scope.books = result.data;

                })
                .catch(function (result) {
                   console.log(result);
                });
        };
        $scope.Search = function(){
            if($scope.textForSearch !== ""){
                $http.post('/api/searchPost', {token: localStorage.getItem("Token"), textSearch: $scope.textForSearch})
                    .then(function (result) {
                        console.log(result.data);
                        $scope.books = result.data;
                    })
                    .catch(function (result) {
                        console.log(result);
                    })




            }



        };
        $scope.delPost = function (id) {
            //let DelPost = document.getElementsByClassName("multi-files"+id);

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
