// TODO выпилить коментраии с кода
//bower install angular#1.2.32
const jwt = require('jsonwebtoken');
// TODO такие переменные выноси в конфиг файл которые должни изменяться перед деплоем на сервер
// TODO переменная дублируеться в 2 местах
const secret = 'shhhhh';
// TODO импорт удобней использовать относительный
db = require(__dirname + "/models/index");
var bodyParser = require('body-parser');
// TODO выпилить коментраии с кода
//npm install angular@1.2.32
//var cors = require('cors')
var path    = require("path");
var crypto = require("crypto");
// TODO импорт удобней использовать относительный вот так
// const contr = require('./controllers/controle'); так
// const contr = require('controllers/controle'); или так
const contr = require(__dirname + '/controllers/controle');

let express = require("express");

let app = express();

app.use(express.static(__dirname + "/views"));
// TODO выпилить коментраии с кода
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// TODO выпилить коментраии с кода
//app.use("/token", express.static(__dirname + "/views"));
// TODO выпилить коментраии с кода
/*
app.use('/addPost', async function (request, response){
    try {
        const decoded = jwt.verify(request.body.token, secret);
        console.log(decoded.name);
    }
    catch (e) {
        console.log("Токен неверный");
    }

    //console.log(request.body.token);

});
*/

// TODO убедись правильно ли ты используешь https://expressjs.com/ru/guide/using-middleware.html ?
let middleware ={
    checkToken:function (request, response, next) {
        try {
            const decoded = jwt.verify(request.body.token, secret);
            // TODO здесь будут проблемы из за асинхроности, нужно добавить async / await
            let result = db.user.findAll({
                where:{
                    firstName: decoded.name
                }
            });
            if(result.length === 0){
                // TODO эту ошибку должен увидеть пользователь, отправь ее на фронт
                console.log("Такого пользователя нет!");
            }
            // TODO выпилить коментраии с кода
            /*
            else if(decoded.role === "Admin"){
                request.nameUser = decoded.name;
                request.roleUser = decoded.role;
                next();
            }
            */
            else{
                request.nameUser = decoded.name;
                request.roleUser = decoded.role;
                next();
            }
        }
        catch (e) {
            // TODO эту ошибку должен увидеть пользователь, отправь ее на фронт
            console.log("Токен неверный");
        }
    },
    checkPostUser:function(request, response, next){
        if(request.roleUser === "Admin"){
            next();
        }
        else{
            // TODO используй async / await
            db.post.findAll({
                where:{
                    id:request.body.postID
                }
            })
                .then(function (result) {
                    //console.log(result);
                    if(result[0].dataValues.firstName === request.nameUser){
                        next();
                    }
                    else{
                        // TODO эту ошибку должен увидеть пользователь, отправь ее на фронт
                        console.log("Это не ваш пост!");
                    }
                })
                .catch(function (result) {
                    console.log("1");
                });
        }
    },
    checkRegistration:function(request, response, next){
        // TODO используй async / await
        db.user.findAll({
            where:{
                firstName:request.body.name
            }
        })
            .then(function (result) {
                if(result.length !== 0){
                    response.send("error_login");
                }
                else{
                    next();
                }
            })
            .catch(function (result) {
               console.log(result);
            });
        // TODO выпилить коментраии с кода
        //console.log(result.length);
    }
};
/**
 * TODO путь для апи выбран некоректно посмотри вот этот гайд
 * https://jazzteam.org/ru/technical-articles/restful-services-manual/
 * у тебя все апи принимает POST запрос, сверься с гайдом правильно ли это?
 */
app.post('/api/searchPost', middleware.checkToken, contr.searchPost);

app.post('/api/savePost', middleware.checkToken, contr.savePost);

app.post('/api/editPost', middleware.checkToken, middleware.checkPostUser, contr.editPost);

app.post('/api/delPost', middleware.checkToken, middleware.checkPostUser, contr.delPost);

app.post('/api/allPost', middleware.checkToken, contr.allPost);

app.post('/api/posts', middleware.checkToken, contr.posts);

app.post('/api/addPost', middleware.checkToken, contr.addPost);
// TODO здесь используеться мидлвар только для одной апишки,
app.use("/api/entry", async function (request, response){
    // TODO убрать неиспользуемую переменную
    let sha256 = crypto.createHash("sha256");
    let result = await db.user.findAll({
        where:{
            firstName:request.body.name,
        }
    });

    if(result.length === 0){
        response.send("error_login");
    }
    // TODO выпилить коментраии с кода
    //require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64")
    else if(require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64") !== result[0].dataValues.password){
        response.send("error_password");
    }
    else {
        contr.Entry(request, response, result);
    }
});

app.post("/api/registration", middleware.checkRegistration, contr.registration);

app.listen(8000);
