//bower install angular#1.2.32
const jwt = require('jsonwebtoken');
const secret = 'shhhhh';
db = require(__dirname + "/models/index");
var bodyParser = require('body-parser');
//npm install angular@1.2.32
//var cors = require('cors')
var path    = require("path");
var crypto = require("crypto");

const contr = require(__dirname + '/controllers/controle');

let express = require("express");

let app = express();

app.use(express.static(__dirname + "/views"));
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use("/token", express.static(__dirname + "/views"));

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
let middleware ={
    checkToken:function (request, response, next) {
        try {
            const decoded = jwt.verify(request.body.token, secret);
            let result = db.user.findAll({
                where:{
                    firstName: decoded.name
                }
            });
            if(result.length === 0){
                console.log("Такого пользователя нет!");
            }
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
            console.log("Токен неверный");
        }
    },
    checkPostUser:function(request, response, next){
        if(request.roleUser === "Admin"){
            next();
        }
        else{
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
                        console.log("Это не ваш пост!");
                    }
                })
                .catch(function (result) {
                    console.log("1");
                });
        }
    },
    checkRegistration:function(request, response, next){
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
        //console.log(result.length);
    }
};

app.post('/api/searchPost', middleware.checkToken, contr.searchPost);

app.post('/api/savePost', middleware.checkToken, contr.savePost);

app.post('/api/editPost', middleware.checkToken, middleware.checkPostUser, contr.editPost);

app.post('/api/delPost', middleware.checkToken, middleware.checkPostUser, contr.delPost);

app.post('/api/allPost', middleware.checkToken, contr.allPost);

app.post('/api/posts', middleware.checkToken, contr.posts);

app.post('/api/addPost', middleware.checkToken, contr.addPost);

app.use("/api/entry", async function (request, response){
    let sha256 = crypto.createHash("sha256");
    let result = await db.user.findAll({
        where:{
            firstName:request.body.name,
        }
    });

    if(result.length === 0){
        response.send("error_login");
    }//require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64")
    else if(require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64") !== result[0].dataValues.password){
        response.send("error_password");
    }
    else {
        contr.Entry(request, response, result);
    }
});

app.post("/api/registration", middleware.checkRegistration, contr.registration);

app.listen(8000);