//bower install angular#1.2.32
var cors = require('cors');
var bodyParser = require('body-parser');
//npm install angular@1.2.32
var path    = require("path");

const contr = require(__dirname + '/controllers/controle');

var express = require("express");

var app = express();

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

var books = [
    {
    name: "qwer"
    },
    {name: "asdf"
    }
];

app.get('/books', function(req, res){
   res.send(books);
});

app.get('/main', function(req, res){
    res.sendFile(path.join(__dirname + "/views/main.html"));
});

//
//app.get("/", contr.entryForm);
//app.get("/toRegOrEnt", contr.toRegOrEnt);
//app.get("/regestration", contr.registration);




app.listen(8000);

//<input type="text" name="name" ng-model="hello" value=hello>