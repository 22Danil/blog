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

        $scope.userPost = function(id, name){
            $http.get('/api/user/'+ id + '/posts', {headers: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    $scope.titleMain = "Записи пользователя: " + name;
                    $scope.books = result.data.result[0];
                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
                });
        };
        $scope.Users = function(){
            $http.get('/api/users', {headers: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    $scope.users = result.data.result[0];
                })
                .catch(function (result) {
                    $scope.ErrorCode(result.status);
                });
        };
        $scope.editPost = function (id, textContent){
            let text = document.getElementsByClassName("test"+id);
            postEditId = id;
            postEditText = textContent;
            text[0].attributes.removeNamedItem("disabled");
        };
        $scope.savePost = function(id, textContent){
            let text = document.getElementsByClassName("test"+id);
            if(id !== postEditId){
                $scope.ErrorCode(400);
            }
            else if(textContent === postEditText){
                text[0].disabled = true;
            }
            else{
                $http.put('/api/posts/' + id, {newText: textContent, postID: id}, {headers: {token: localStorage.getItem("Token")}})
                    .then(function (result) {
                        text[0].disabled = true;
                    })
                    .catch(function (result) {
                        text[0].disabled = true;
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
                            result.data.result.firstName = localStorage.getItem("Name");
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
                    $scope.titleMain = "Записи всех пользователей";
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
                        $scope.titleMain = "Результат поиска";
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
        $scope.userDelete = function(id, name){
            $http.delete('/api/users/'+ id, {headers: {token: localStorage.getItem("Token")}})
                .then(function (result) {
                    if(result.data.user == name){
                        $location.path("/");
                    }
                    else{
                        $scope.Users();
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
        $scope.Users();
    }
}