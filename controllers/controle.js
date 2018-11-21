db = require(__dirname + "//..//models//index");

//test = require(__dirname + "/../views");

var path    = require("path");
module.exports = {
    entry: async function(request, response){
        response.sendFile(path.join(__dirname + "/../views/template.html"));
    },
    toRegistration: async function(request, response){
        response.sendFile(path.join(__dirname + "/../views/regestration.html"));
    }

};