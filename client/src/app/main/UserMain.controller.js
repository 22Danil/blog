import {toString} from "../../../bower_components/moment/src/lib/moment/format";

export class MainUserController {
    constructor ($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
        'ngInject'


        let modal = document.getElementById('myModal');
        let span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
            $scope.Header = "";
            $scope.textBody = "";
        };


        $scope.Header = "";
        $scope.textBody = "";
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
            else{
                $http.put('/api/posts/' + id, {token: localStorage.getItem("Token"), newText: savePost[0].textContent, postID: id})
                    .then(function () {
                        savePost[0].disabled = true;
                    })
                    .catch(function (result) {
                        savePost[0].disabled = true;
                        $scope.ErrorCode(result.status);
                    })
            }
        };
        $scope.newPost = function () {
            let text = document.getElementsByClassName("addPost");
            if(text[1].textContent !== ""){
                $http.post('/api/posts', {token: localStorage.getItem("Token"), textPost: text[1].textContent, textTitle: $scope.textForTitle})
                    .then(function (result) {
                        $scope.books.push(result.data)
                    })
                    .catch(function (result) {
                        $scope.ErrorCode(result.status);
                    });
            }

        };
        $scope.Posts = function () {
            //console.log(localStorage.getItem("Token"));
            $http.get('/api/user/'+ localStorage.getItem("Id") + '/posts', {params: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    $scope.books = result.data;
                    console.log($scope.books);
                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
                });
        };
        $scope.AllPosts = function () {
            $http.get('/api/posts', {params: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    console.log(result.data);
                    $scope.books = result.data;

                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
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
                        $scope.ErrorCode(result.status);
                    })
            }

        };
        $scope.delPost = function (id) {
            $http.delete('/api/posts/'+ id, {params: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    console.log(result);
                    if(result.data === "OK"){
                        $scope.Posts();
                    }
                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
                });
        };
        $scope.ErrorCode = function (statusCode) {
            if (statusCode === 403){
                $scope.Header = "Error: " + statusCode;
                $scope.textBody = "У вас нет прав на это действие!";
                modal.style.display = "block";
            }
            else if(statusCode === 401){
                $scope.Header = "Error: " + statusCode;
                $scope.textBody = "Неверный логин или пароль!";
                modal.style.display = "block";
            }
        };
    }
}