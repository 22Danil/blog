db = require(__dirname + "/../models/index");
const jwt = require('jsonwebtoken');
const config = require('./../config/config');

module.exports = {
    posts: async function(request, response){
        let result = await db.post.findAll({
            where:{
                firstName:request.nameUser
            }
        });
        response.json(result);
    },
    addPost: async function(request, response){
        try{
            let result = await db.post.create({firstName: request.nameUser, postText:request.body.textPost, titleText: request.body.textTitle});
            return response.json(result);
        }
        catch (e) {
            console.log(e);
        }
    },
    allPost: async function(request, response){
        let result = await db.post.findAll();
        response.json(result);
    },
    delPost: async function(request, response){
        try{
                await db.post.destroy({
                where:{
                    id:request.params.id
                }
            });
            return response.json("OK");
        }
        catch (e) {
            console.log(e);
        }
    },
    searchPost: async function(request, response){
        try{
            let result = await db.post.findAll({
                where:{
                    titleText: request.params.title
                }
            });
            return response.json(result);
        }
        catch (e) {
            console.log(e);
        }
    },
    savePost: async function(request, response) {
        try{
            await db.post.update({postText: request.body.newText},{
                where:{
                    id: request.params.id
                }
            });
            return response.json(); //TODO можно ли так делать?
        }
        catch (e) {
            console.log(e);
        }
    },
    Entry: async function(request, response){
        try {
            let userResult = await db.user.findOne({
                where:{
                    firstName:request.body.name,
                }
            });
            const result = await db.porpuse.findOne({
                where: {
                    userId: userResult.dataValues.id
                }
            });
            const role = await db.role.findOne({
                where: {
                    id: result.dataValues.nominationId
                }
            });
            const token = jwt.sign({
                name: userResult.dataValues.firstName,
                id: userResult.dataValues.id,
                role: role.dataValues.nomination
            }, config.secret);
            return response.json({token: token, name: userResult.dataValues.firstName, id: userResult.dataValues.id});
        } catch (e) {
            // TODO обработчик ошибок стоит делать один на весь контролер, а лучше вынести его в миделвар
            console.log(e);
        }
    },
    checkEntry: async function(request, response, next){
        try {
            let result = await db.user.findAll({
                where: {
                    firstName: request.body.name,
                }
            });
            if (result.length === 0) {
                next(401);
            }
            else if (require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64") !== result[0].dataValues.password) {
                next(401);
            }
            else {
                next();
            }
        }
        catch (e) {
            console.log(e);
        }
    },
    registration: async function(request, response){
        try{
            let sault = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            let result = await db.user.create({firstName:request.body.name, email:request.body.email, password:require("crypto").createHash("sha256").update(request.body.password + sault).digest("base64"), sault:sault});
            await db.porpuse.create({nominationId:2, userId:result.dataValues.id});
            return response.json();
        }
        catch (e) {
            console.log(e);
        }
    },
    checkRegistration:async function(request, response, next){
        try{
            let result = await db.user.findAll({
                where:{
                    firstName:request.body.name
                }
            });
            if(result.length !== 0){
                next(401)
            }
            else{
                next();
            }
        }
        catch (e) {
            console.log(e)
        }
    }
};