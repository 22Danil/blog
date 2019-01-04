// TODO выпилить коментраии с кода
//bower install angular#1.2.32


const jwt = require('jsonwebtoken');
// TODO такие переменные выноси в конфиг файл которые должни изменяться перед деплоем на сервер //Done
// TODO переменная дублируеться в 2 местах //Done
const config = require('./config/config');
//const secret = 'shhhhh';
// TODO импорт удобней использовать относительный //Done
const db = require('./models/index');
const Op = db.Sequelize.Op;
let bodyParser = require('body-parser');

// TODO импорт удобней использовать относительный вот так //Done // В чем разница??
// const contr = require('./controllers/controle'); так
// const contr = require('controllers/controle'); или так
const contr = require('./controllers/controle');

let express = require("express");

let app = express();

app.use(express.static(__dirname + "/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// TODO убедись правильно ли ты используешь https://expressjs.com/ru/guide/using-middleware.html ?
let middleware ={
    checkToken:async function(request, response, next) {
        try {
            let decoded;
            if(request.body.token){
                decoded = jwt.verify(request.body.token, config.secret);
            }
            else {
                decoded = jwt.verify(request.query.token, config.secret);
            }

            let result;
            if(request.params.id){
                result = await db.user.findAll({
                    where:{
                        firstName: decoded.name,
                        [Op.and]: {id: request.params.id}
                    }
                });
            }
            else {
                result = await db.user.findAll({
                    where:{
                        firstName: decoded.name,
                    }
                });
            }
            if(result.length === 0){
                // TODO эту ошибку должен увидеть пользователь, отправь ее на фронт
                console.log("Такого пользователя нет!");
            }
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
    }
};
/**
 * TODO путь для апи выбран некоректно посмотри вот этот гайд
 * https://jazzteam.org/ru/technical-articles/restful-services-manual/
 * у тебя все апи принимает POST запрос, сверься с гайдом правильно ли это?
 */
app.post('/api/searchPost', middleware.checkToken, contr.searchPost);//Поменять

app.post('/api/savePost', middleware.checkToken, contr.savePost);//Поменять

app.post('/api/editPost', middleware.checkToken, middleware.checkPostUser, contr.editPost);//Поменять

app.delete('/api/posts', middleware.checkToken, middleware.checkPostUser, contr.delPost);//

app.get('/api/posts', middleware.checkToken, contr.allPost);//Done

app.get('/api/user/:id/posts', middleware.checkToken, contr.posts);//Done
///app.get('/api/posts', middleware.checkToken, contr.posts);

app.post('/api/posts', middleware.checkToken, contr.addPost);//Done



//вход и регистрацию поменять/уточнить

// TODO здесь используеться мидлвар только для одной апишки,
app.use("/api/entry", async function (request, response){
    // TODO убрать неиспользуемую переменную // Done

    let result = await db.user.findAll({
        where:{
            firstName:request.body.name,
        }
    });

    if(result.length === 0){
        response.send("error_login");
    }

    else if(require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64") !== result[0].dataValues.password){
        response.send("error_password");
    }
    else {
        contr.Entry(request, response, result);
    }
});

app.post("/api/registration", middleware.checkRegistration, contr.registration);//Поменять

app.listen(8000);