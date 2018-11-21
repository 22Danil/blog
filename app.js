//bower install angular#1.2.32
//npm install angular@1.2.32

const contr = require(__dirname + '/controllers/controle');

var express = require("express");

var app = express();

app.get("/", contr.entry);
app.get("/toRegestration", contr.toRegistration);




app.listen(4000);

//<input type="text" name="name" ng-model="hello" value=hello>