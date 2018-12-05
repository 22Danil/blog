db = require(__dirname + "//..//models//index");
const jwt = require('jsonwebtoken');
const secret = 'shhhhh';
//test = require(__dirname + "/../views");
var crypto = require("crypto");
var path    = require("path");
var bodyParser = require('body-parser');




module.exports = {
    posts: async function(request, response){
        //console.log(request.query.id );
        let result = await db.post.findAll({
            where:{
                firstName:request.body.name
            }
        });
        response.send(result);
    },
    addPost: async function(request, response){
        console.log("sss");

    },
    Entry: async function(request, response, userResult){

        await db.porpuse.findAll({
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

                            const token = jwt.sign({ name: userResult[0].dataValues.firstName, id: userResult[0].dataValues.id}, secret);


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
                });

    },
    registration: async function(request, response){
        let sault = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        //let sha256 = crypto.createHash("sha256");
        //sha256.update(request.query.passsword + sault, "utf-8");
        //console.log(request.body.passsword);

        //let passwordHash = require("crypto").createHash("sha256").update(request.body.password + sault).digest("base64");

        await db.user.create({firstName:request.body.name, email:request.body.email, password:require("crypto").createHash("sha256").update(request.body.password + sault).digest("base64"), sault:sault})
            .then(function (result) {
                //console.log(result);
                db.porpuse.create({nominationId:2, userId:result.dataValues.id});

            })
            .catch(function (result) {
                console.log(result)
            });

    },
    book: async function(request, response){
        let result = await db.user.findAll();

        response.send(result);

    },
    test: async function(request, response){
        console.log("Middleware 1");
        console.log(request);
    }


};