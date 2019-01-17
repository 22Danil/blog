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
app.use('/api', async function (request, response, next) {
    try {
        let decoded = jwt.verify(request.headers.token, config.secret);
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
            next(400);
        }
        else{
            request.user = result[0].dataValues;
            next();
        }
    }
    catch (e) {
        next(e);
    }
});

app.use('/api/posts/:id', async function (request, response, next) {
    const result = await db.porpuse.findOne({
        where: {
            userId: request.user.id
        }
    });
    const role = await db.role.findOne({
        where: {
            id: result.dataValues.nominationId
        }
    });
    if(role.dataValues.nomination === "Admin"){
        next();
    }
    else{
        try{
            let result = await db.post.findAll({
                where:{
                    id:request.params.id
                }
            });
            if(result[0].dataValues.firstName === request.user.firstName){
                next();
            }
            else{
                next(403);
            }
        }
        catch (e) {
            next(e);
        }

/*
        await db.post.findAll({
            where:{
                id:request.params.id
            }
        })
            .then(function (result) {
                if(result[0].dataValues.firstName === request.user.firstName){
                    next();
                }
                else{
                    next(403);
                }
            })
            .catch(function (result) {
                console.log("Ошибка: " + result);
            });*/
    }
});

app.get('/api/search/:title', contr.searchPost);

app.put('/api/posts/:id', contr.savePost);

app.delete('/api/posts/:id', contr.delPost);

app.get('/api/posts', contr.allPost);

app.get('/api/user/:id/posts', contr.posts);

app.post('/api/posts', contr.addPost);

app.post('/entry', contr.checkEntry, contr.Entry);

app.post('/registration', contr.checkRegistration, contr.registration);

app.use(function (err, request, response, next) {
    if(typeof err === "number"){
        response.status(err).send("Error!");
    }
    else if(err === "MyError"){
        response.status(400).send("Error!");
    }
    else {
        response.status(500).send("Error!");
    }
});

app.listen(8000);