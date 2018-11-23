db = require(__dirname + "//..//models//index");

//test = require(__dirname + "/../views");
var crypto = require("crypto");
var path    = require("path");

module.exports = {
    entryForm: async function(request, response){
        response.sendFile(path.join(__dirname + "/../views/template.html"));
    },
    toRegOrEnt: async function(request, response){
        if(request.query.click_button === "entry") {

            let result = await db.user.findAll({
                where:{firstName:request.query.name}
            });
            if(result.length === 0){
                console.log("sdf");
            }
            console.log(result);

            //console.log(result[0].dataValues.password);

            //let sha256 = crypto.createHash("sha256");
            //sha256.update(request.query.passsword + result[0].dataValues.sault, "utf-8");

            //console.log(sha256.digest("base64"));



            response.sendFile(path.join(__dirname + "/../views/main.html"));
        }
        else{
            response.sendFile(path.join(__dirname + "/../views/regestration.html"));
        }
    },
    registration: async function(request, response){
        let sault = Math.random().toString (36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let sha256 = crypto.createHash("sha256");
        sha256.update(request.query.passsword + sault, "utf-8");
        await db.user.create({firstName:request.query.name, email:request.query.email, password:sha256.digest("base64"), sault:sault});
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
    entry: async function(request, response){

    }


};