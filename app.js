//bower install angular#1.2.32
var cors = require('cors');
var bodyParser = require('body-parser');
//npm install angular@1.2.32
var path    = require("path");

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
app.get("/token", function (request, response){

    //response.sendFile(path.join(__dirname + "/views/main.html"));

    response.send({token:"1", Name:"aa"})

});

app.get("/", contr.entryForm);
//app.use("/",function(request, response, next){
    //response.sendFile(path.join(__dirname + "/views/template.html"));
    //next();
//});
app.post("/entryOrRegistration", function (request, response) {
    //console.log(request);
    if(request.body.click_button === "toRegistration"){
        response.sendFile(path.join(__dirname + "/views/registration.html"));
    }
    else{
        //response.redirect();
        contr.Entry(request, response);
        //response.sendFile(path.join(__dirname + "/views/main.html"));
    }

});

//app.get("/", contr.entryForm);
//app.get("/toRegOrEnt", contr.toRegOrEnt);
app.get("/registration", contr.registration);




app.listen(2000);

//<input type="text" name="name" ng-model="hello" value=hello>