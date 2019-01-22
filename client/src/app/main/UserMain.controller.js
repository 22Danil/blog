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

        $scope.titleMain = "Здесь будут ваши записи";
        $scope.forEditPost = false;
        $scope.books = [];
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

        $scope.editPost = function (id, textContent){
            postEditId = id;
            postEditText = textContent;
            $scope.forEditPost = true;

        };
        $scope.savePost = function(id, textContent){
            console.log(textContent);
            if(id !== postEditId){
                $scope.ErrorCode(400);
            }
            else if(textContent === postEditText){
                $scope.forEditPost = false;
            }
            else{
                $http.put('/api/posts/' + id, {newText: textContent, postID: id}, {headers: {token: localStorage.getItem("Token")}})
                    .then(function (result) {
                        $scope.forEditPost = false;
                    })
                    .catch(function (result) {
                        $scope.forEditPost = true;
                        $scope.ErrorCode(result.status);
                    })
            }
        };
        $scope.newPost = function () {
            let text = document.getElementsByClassName("addPost");
            if(text[1].textContent !== "" && text[0].value !== ""){
                $http.post('/api/posts', {textPost: text[1].textContent, textTitle: $scope.textForTitle}, {headers: {token: localStorage.getItem("Token")}})
                    .then(function (result) {
                        if($scope.books){
                            $scope.books.push(result.data.result);
                            $scope.textForPost = "";
                            $scope.textForTitle = "";
                        }
                    })
                    .catch(function (result) {
                        $scope.ErrorCode(result.status);
                    });
            }
        };
        $scope.Posts = function () {
            $http.get('/api/user/'+ localStorage.getItem("Id") + '/posts', {headers: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    $scope.titleMain = "Ваши записи";
                    $scope.books = result.data.result[0];
                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
                });
        };
        $scope.AllPosts = function () {
            $http.get('/api/posts', {headers: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    $scope.titleMain = "Записи всех пользвателей";
                    $scope.books = result.data.result[0];
                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
                });
        };
        $scope.Search = function(){
            if($scope.textForSearch !== ""){
                $http.get('/api/search/' + $scope.textForSearch, {headers: {token: localStorage.getItem("Token")}})
                    .then(function (result) {
                        $scope.books = result.data.result[0];
                        $scope.textForSearch = "";
                    })
                    .catch(function (result) {
                        $scope.ErrorCode(result.status);
                        $scope.textForSearch = "";
                    })
            }
        };
        $scope.delPost = function (id, name) {
            $http.delete('/api/posts/'+ id, {headers: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    if(result.data.user === name){
                        $scope.Posts();
                    }
                    $scope.AllPosts();
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
            else if(statusCode === 400){
                $scope.Header = "Error: " + statusCode;
                $scope.textBody = "Неверный запрос!";
                modal.style.display = "block";
            }
            else if(statusCode === 500){
                $scope.Header = "Error: " + statusCode;
                $scope.textBody = "Внутренняя ошибка сервера!";
                modal.style.display = "block";
            }
        };
    }
}