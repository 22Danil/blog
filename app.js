//bower install angular#1.2.32

db = require(__dirname + "/models/index");
var bodyParser = require('body-parser');
//npm install angular@1.2.32
var cors = require('cors')
var path    = require("path");
var crypto = require("crypto");

const contr = require(__dirname + '/controllers/controle');

let express = require("express");

let app = express();

app.use(express.static(__dirname + "/views"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use("/token", express.static(__dirname + "/views"));



app.get('/posts', contr.posts);
//app.post('/posts', contr.set_posts);

//app.get('/main', function(req, res){
    //res.sendFile(path.join(__dirname + "/views/main.html"));
app.get("/token", function (request, response){

    //response.sendFile(path.join(__dirname + "/views/main.html"));

    response.send({token:"1", Name:"aa"})

});

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

    //let k = require("crypto").createHash("sha256").update('3333' + 'vyk7f4zwjl82tij63pim6').digest("base64");
    //k;
    //let n = sha256.update('3333' + 'vyk7f4zwjl82tij63pim6', "utf-8").digest("base64");



    console.log(require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64"));
    //sha256.update(request.body.password + result[0].dataValues.sault, "utf-8");
    //console.log(sha256.digest("base64"));
    //console.log(result[0].dataValues.password);
    //console.log(sha256.digest("base64"));
    if(result.length === 0){
        response.send("error_login");
    }//require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64")
    else if(require("crypto").createHash("sha256").update(request.body.password + result[0].dataValues.sault).digest("base64") !== result[0].dataValues.password){
        response.send("error_password");
    }
    else {
        contr.Entry(request, response, result);
    }
    //console.log(result)

});


//app.get("/", contr.entryForm);
//app.use("/",function(request, response, next){
    //response.sendFile(path.join(__dirname + "/views/template.html"));
    //next();
//});
app.get("/entryOrRegistration", function (request, response) {
        response.sendFile(path.join(__dirname + "/views/registration.html"));
});

//app.get("/", contr.entryForm);
//app.get("/toRegOrEnt", contr.toRegOrEnt);
app.post("/registration", contr.registration);

app.listen(8000);