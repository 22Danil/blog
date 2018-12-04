db = require(__dirname + "//..//models//index");
const jwt = require('jsonwebtoken');
const secret = 'shhhhh';
//test = require(__dirname + "/../views");
var crypto = require("crypto");
var path    = require("path");
var bodyParser = require('body-parser');




module.exports = {
    entryForm: async function(request, response){
        response.sendFile(path.join(__dirname + "/../views/template.html"));
    },
    posts: async function(request, response){
        console.log(request.query.id );
        let result = await db.post.findAll({
            where:{
                firstName:request.query.name
            }
        });
        response.send(result);
    },
    Entry: async function(request, response, userResult){
            let role = "";

            await db.porpuse.findAll({
               where:{
                   userId:userResult.dataValues.id
               }
            })
                .then(function (result) {
                    role = db.role.findAll({
                        attributes:['nomination'],
                        where:{
                            id:result.dataValues.nominationId
                        }
                    })

                })
                .catch(function (result){
                    console.log(result);
                });

            console.log(role);
            /*
            let result = await db.role.findAll({
                attributes:['nomination'],
                where:{
                    id:7
                },
                include:[{
                    model:db.porpuse,
                    where:{
                        userId:7
                    }
                }]
            });
            */


            //response.sendFile(path.join(__dirname + "/../views/main.html"));
            /*
            let result = await db.user.findAll({
                where:{firstName:request.query.name}
            });
            if(result.length === 0){
                console.log("sdf");
            }
            else{
                response.send(result);
            }
            */
            //console.log(result);

            //console.log(result[0].dataValues.password);

            //let sha256 = crypto.createHash("sha256");
            //sha256.update(request.query.passsword + result[0].dataValues.sault, "utf-8");

            //console.log(sha256.digest("base64"));

            // шифрование
            //const token = jwt.sign({ foo: 'bar' }, secret);

            //console.log(token);
            //response.redirect("/token?tok=" + token + "&name="+request.query.name, 302);
            //response.send(tok="1", path.join(__dirname + "/../views/main.html"));
            //response.sendFile(path.join(__dirname + "/../views/main.html"));


    },
    registration: async function(request, response){
        let sault = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        //let sha256 = crypto.createHash("sha256");
        //sha256.update(request.query.passsword + sault, "utf-8");
        console.log(request.body.passsword);
        let passwordHash = require("crypto").createHash("sha256").update(request.body.passsword.toString() + sault).digest("base64");
        await db.user.create({firstName:request.body.name, email:request.body.email, password:require("crypto").createHash("sha256").update(request.body.passsword + sault).digest("base64"), sault:sault})
            .then(function (result) {
                //console.log(result);
                db.porpuse.create({nominationId:2, userId:result.dataValues.id});

            })
            .catch(function (result) {
                console.log(result)
            });
        /*console
        db.Person.create({firstName:request.query.firstN, lastName: request.query.lastN, number:request.query.Num});
        response.redirect("/", 302)

        var sha256 = crypto.createHash("sha256");
        var salt = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        sha256.update("Password" + "sault", "utf-8");

        console.log(sha256.digest("base64"));
        console.log(salt);
        */
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