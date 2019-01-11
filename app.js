// TODO исправить изменение поста (не сохраняет без изменений)
const jwt = require('jsonwebtoken');
const config = require('./config/config');
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
// TODO убрать "роль" из токена
// TODO перенести токен из query в headers
app.use('/api', async function (request, response, next) {
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
                    [Op.and]: {id: decoded.id}
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
            request.user = result[0].dataValues;// TODO переделать
            request.nameUser = decoded.name;
            request.roleUser = decoded.role;
            next();
        }
    }
    catch (e) {
        // TODO эту ошибку должен увидеть пользователь, отправь ее на фронт
        console.log("Токен неверный");
    }
});

app.use('/api/posts/:id', async function (request, response, next) {
    if(request.roleUser === "Admin"){
        next();
    }
    else{
        // TODO используй async / await
        db.post.findAll({
            where:{
                id:request.params.id
            }
        })
            .then(function (result) {
                if(result[0].dataValues.firstName === request.nameUser){
                    next();
                }
                else{
                    next(403);
                }
            })
            .catch(function (result) {
                console.log("Ошибка: " + result);
            });
    }
});

app.get('/api/search/:title', contr.searchPost);//Done

app.put('/api/posts/:id', contr.savePost);//Done

app.delete('/api/posts/:id', contr.delPost);//Done

app.get('/api/posts', contr.allPost);//Done

app.get('/api/user/:id/posts', contr.posts);//Done

app.post('/api/posts', contr.addPost);//Done

app.post('/entry', contr.checkEntry, contr.Entry);//Done

app.post('/registration', contr.checkRegistration, contr.registration);//Done

app.use(function (err, request, response, next) {
   response.status(err).send("Error");
});

app.listen(8000);