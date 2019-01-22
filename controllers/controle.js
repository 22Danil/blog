db = require(__dirname + "/../models/index");
const jwt = require('jsonwebtoken');
const config = require('../config/configg');
module.exports = {
    posts: async function(request, response){
        let result = await db.sequelize.query('SELECT posts."id", posts."userID", posts."postText", posts."titleText", users."firstName" FROM posts INNER JOIN ' +
            'users ON posts."userID" = users."id" WHERE users."id" = ?', {replacements: [request.user.id]});

        response.json({result:result});
    },
    addPost: async function(request, response, next){
        try{
            let result = await db.post.create({userID: request.user.id, postText:request.body.textPost, titleText: request.body.textTitle});
            return response.json({result:result});
        }
        catch (e) {
            next(e);
        }
    },
    allPost: async function(request, response){
        let result = await db.sequelize.query('SELECT posts."id", posts."userID", posts."postText", posts."titleText", users."firstName" FROM posts INNER JOIN ' +
            'users ON posts."userID" = users."id" ');

        response.json({result:result});
    },
    delPost: async function(request, response, next){
        try{
                let result = await db.post.destroy({
                where:{
                    id: request.params.id
                }
            });
                if(result === 0){
                    throw "MyError";
                }
            return response.json({user: request.user.firstName});
        }
        catch (e) {
            next(e);
        }
    },
    searchPost: async function(request, response, next){
        try{
            let result = await db.sequelize.query('SELECT posts."id", posts."userID", posts."postText", posts."titleText", users."firstName" FROM posts INNER JOIN ' +
                'users ON posts."userID" = users."id" WHERE posts."titleText" = ?', {replacements: [request.params.title]});
            if(result[0].length === 0){
                throw "MyError";
            }
            return response.json({result:result});
        }
        catch (e) {
            next(e);
        }
    },
    savePost: async function(request, response, next) {
        try{
            let result = await db.post.update({postText: request.body.newText},{
                where:{
                    id: request.params.id
                }
            });
            if(result[0] === 0){
                throw "MyError";
            }
            return response.json();
        }
        catch (e) {
            next(e);
        }
    },
    Entry: async function(request, response, next){
        try {
            let userResult = await db.user.findOne({
                where:{
                    firstName:request.body.name,
                }
            });
            const token = jwt.sign({
                name: userResult.dataValues.firstName,
                id: userResult.dataValues.id,
            }, config.secret);
            return response.json({token: token, name: userResult.dataValues.firstName, id: userResult.dataValues.id});
        } catch (e) {
            next(e);
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
            next(e);
        }
    },
    registration: async function(request, response, next){
        try{
            let sault = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            let result = await db.user.create({firstName:request.body.name, email:request.body.email, password:require("crypto").createHash("sha256").update(request.body.password + sault).digest("base64"), sault:sault});
            await db.purpose.create({nominationId:2, userID:result.dataValues.id});
            return response.json();
        }
        catch (e) {
            next(e);
        }
    },
    checkRegistration:async function(request, response, next){
        try{
            if(request.body.name === "" || request.body.email === "" || request.body.passsword === ""){
                next(401)
            }
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
            next(e);
        }
    }
};