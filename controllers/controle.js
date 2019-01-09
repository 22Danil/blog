// добавь const для строки ниже
db = require(__dirname + "/../models/index");
const jwt = require('jsonwebtoken');
// TODO такие переменные выноси в конфиг файл которые должни изменяться перед деплоем на сервер // Done
//const secret = 'shhhhh';
const config = require('./../config/config');


module.exports = {
    posts: async function(request, response){
        let result = await db.post.findAll({
            where:{
                firstName:request.nameUser
            }
        });
        // TODO используй response.json(), фронт всегда будет ожидать json
        response.send(result);
    },
    addPost: async function(request, response){
        // TODO сделай как на 89-110 строке
        await db.post.create({firstName: request.nameUser, postText:request.body.textPost, titleText: request.body.textTitle})
            .then(function (result) {
                // TODO если ты создал пост его стоит сразу здесь отдать на фронт
                response.json({status:"OK"});
            })
            .catch(function (result) {
               console.log(result);
            });
    },
    allPost: async function(request, response){
        let result = await db.post.findAll();
        // TODO используй response.json(), фронт всегда будет ожидать json
        response.send(result);
    },
    delPost: async function(request, response){

        // TODO сделай как на 89-110 строке
        db.post.destroy({
            where:{
                id:request.params.id
            }
        })
            .then(function (result) {
                response.json({status: "OK"});
            })
            .catch(function (result) {
                console.log(result);
            })
    },
    editPost: async function(request, response){
        response.json({status:"OK"});
    },
    searchPost: async function(request, response){
        // TODO используй async / await сделай как на 89-110 строке

        db.post.findAll({
            where:{
                titleText: request.params.title
            }
        })
            .then(function (result) {
                // TODO используй response.json(), фронт всегда будет ожидать json
                response.send(result);

            })
            .catch(function (result) {
                console.log(result);
            })
    },
    savePost: async function(request, response) {
        // TODO используй async / await сделай как на 89-110 строкеt
        db.post.update({postText: request.body.newText},{
            where:{
                id: request.params.id
            }
        })
            .then(function (result) {
                response.json({status: "OK"});
            })
            .catch(function (result) {
                console.log(result);
            })
    },
    Entry: async function(request, response){
        // TODO получилась дикая вложеность, ниже перепишу посмотри как лучше делать
        try {
            //
            let userResult = await db.user.findAll({
                where:{
                    firstName:request.body.name,
                }
            });
            //

            // TODO если тебе нужно найти только 1 значение то стоит использовать findOne вместо findAll
            const result = await db.porpuse.findAll({
                where: {
                    userId: userResult[0].dataValues.id
                }
            });
            const role = await db.role.findAll({
                where: {
                    id: result[0].dataValues.nominationId
                }
            });
            const token = jwt.sign({
                name: userResult[0].dataValues.firstName,
                id: userResult[0].dataValues.id,
                role: role[0].dataValues.nomination
            }, config.secret);
            return response.json({token: token, name: userResult[0].dataValues.firstName, id: userResult[0].dataValues.id});
        } catch (e) {
            // TODO обработчик ошибок стоит делать один на весь контролер, а лучше вынести его в миделвар
            console.log(e);
        }
        // TODO твой вариант
        /*await db.porpuse.findAll({
               where:{
                   userId:userResult[0].dataValues.id
               }
            })
                .then(function (result) {
                    db.role.findAll({
                        where:{
                            id:result[0].dataValues.nominationId
                        }
                    })
                        .then(function (role){

                            const token = jwt.sign({ name: userResult[0].dataValues.firstName, id: userResult[0].dataValues.id, role: role[0].dataValues.nomination}, secret);


                            response.json({token:token, name: userResult[0].dataValues.firstName});

                           //console.log(role[0].dataValues.nomination + "111");
                           //roleUser = role[0].dataValues.nomination;
                            //o.abs = role[0].dataValues.nomination;
                            //console.log(o);
                        })
                        .catch(function (role) {
                            console.log(role);
                        });

                })
                .catch(function (result){
                    console.log(result);
                });*/

    },
    checkEntry: async function(request, response, next){
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
            next();
        }
    },
    registration: async function(request, response){
        let sault = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


        await db.user.create({firstName:request.body.name, email:request.body.email, password:require("crypto").createHash("sha256").update(request.body.password + sault).digest("base64"), sault:sault})
            .then(function (result) {
                // TODO в двух строках ниже есть проблема, здесь дело случая какая выполниться раньше
                // TODO используй async / await
                db.porpuse.create({nominationId:2, userId:result.dataValues.id});
                // TODO используй response.json(), фронт всегда будет ожидать json
                response.send("OK");
            })
            .catch(function (result) {
                console.log(result)
            });
    },
    checkRegistration:async function(request, response, next){
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
