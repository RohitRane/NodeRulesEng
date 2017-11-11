let path= require('path');
let express= require('express');
let bodyParser = require('body-parser');
let session  = require('express-session')
let expressSequelizeSession = require('express-sequelize-session');
let store = expressSequelizeSession(session.Store);
let data = require('./db');
let config = require('./environment')
let connection = data.connection;

let init=function(app){
    let env = app.get('env');
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({ extended: false }));


    app.set('appPath', path.join(config.root, 'client/public/view'));
    app.set('adminPath', path.join(config.root, 'client/public/build'));
    app.set('equationEditorPath', path.join(config.root, 'client/public/eqEditor'));

    if('production' === env){
        var public= path.resolve(__dirname +"/../../client/public" );
        app.use(express.static(public));
    }
    app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Credentials", true);
     res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
     res.header("Access-Control-Allow-Headers", "x-requested-with, Content-Type, origin, authorization, accept, client-security-token");
        if(req.method === 'OPTIONS'){
            console.log("oops")
            res.sendStatus(200);
        }else{
           next();
        }
    })

    //app.use('/auth/forgotPasswordLink', require('./../auth/auth.service').validateResetPasswordLink)
    //app.use('/api', require('./../auth/auth.service').isAuthenticated);

}
module.exports=init;

