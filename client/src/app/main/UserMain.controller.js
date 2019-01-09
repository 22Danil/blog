import {toString} from "../../../bower_components/moment/src/lib/moment/format";

export class MainUserController {
    constructor ($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
        'ngInject'

        $scope.nameUser = localStorage.getItem("Name");
        $scope.textForPost = "";
        $scope.textForTitle = "";
        $scope.textForSearch = "";
        $scope.countId = 0;
        $scope.test = "true";
        let postEditId;
        let postEditText;

        $scope.editPost = function (id) {
            let editPost = document.getElementsByClassName("multi-files"+id);
            postEditId = id;
            postEditText = editPost[0].textContent;
            editPost[0].attributes.removeNamedItem("disabled");

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
                $http.put('/api/posts/' + id, {token: localStorage.getItem("Token"), newText: savePost[0].textContent, postID: id})
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
        };
        $scope.newPost = function () {
            let text = document.getElementsByClassName("addPost");
            if(text[1].textContent !== ""){
                $http.post('/api/posts', {token: localStorage.getItem("Token"), textPost: text[1].textContent, textTitle: $scope.textForTitle})
                    .then(function (result) {
                        if(result.data.status === "OK"){
                            $scope.Posts();
                        }
                    })
                    .catch(function (result) {
                       console.log(result);
                    });
            }

        };
        $scope.Posts = function () {
            //console.log(localStorage.getItem("Token"));
            $http.get('/api/user/'+ localStorage.getItem("Id") + '/posts', {params: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    $scope.books = result.data;
                    console.log(result)
                })
                .catch(function (result) {
                    console.log(result)
                });
        };
        $scope.AllPosts = function () {
            $http.get('/api/posts', {params: {token: localStorage.getItem("Token")}})
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
                $http.get('/api/search/' + $scope.textForSearch, {params: {token: localStorage.getItem("Token")}})
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
            $http.delete('/api/posts/'+ id, {params: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    if(result.data.status === "OK"){
                        $scope.Posts();
                    }
                })
                .catch(function (result) {
                    console.log(result);
                });
        };
    }
}