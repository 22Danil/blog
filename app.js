//bower install angular#1.2.32

db = require(__dirname + "/models/index");
var bodyParser = require('body-parser');
//npm install angular@1.2.32
var path    = require("path");
var crypto = require("crypto");

const contr = require(__dirname + '/controllers/controle');

let express = require("express");

let app = express();

app.use(express.static(__dirname + "/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use("/token", express.static(__dirname + "/views"));



app.get('/posts', contr.posts);
//app.post('/posts', contr.set_posts);

//app.get('/main', function(req, res){
    //res.sendFile(path.join(__dirname + "/views/main.html"));
//});
app.use("/entry", async function (request, response){
    let sha256 = crypto.createHash("sha256");
    /*
     let sault = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        sha256.update(request.query.passsword + sault, "utf-8");
        await db.user.create({firstName:request.query.name, email:request.query.email, password:sha256.digest("base64"), sault:sault});
        */
    let result = await db.user.findAll({
        where:{
            firstName:request.body.name,
        }
    });
    if(result.length === 0){
        response.send("error_login");
    }
    else if(sha256.update(request.body.password + result[0].sault, "utf-8").digest("base64") !== result[0].password){
        response.send("error_password");
    }
    else {
        contr.Entry(request, response);
    }
    //console.log(result)

});

app.get("/token", function (request, response){

    //response.sendFile(path.join(__dirname + "/views/main.html"));

    response.send({token:"1", Name:"aa"})

});


app.get("/", contr.entryForm);
//app.use("/",function(request, response, next){
    //response.sendFile(path.join(__dirname + "/views/template.html"));
    //next();
//});
app.get("/entryOrRegistration", function (request, response) {
        response.sendFile(path.join(__dirname + "/views/registration.html"));
});

//app.get("/", contr.entryForm);
//app.get("/toRegOrEnt", contr.toRegOrEnt);
app.get("/registration", contr.registration);

app.listen(2000);