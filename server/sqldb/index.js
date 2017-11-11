let path = require('path');
let data = require('../config/db')
let models = [
	'subject'
];
let db ={};
let format = path.join(__dirname ,'../api/{0}/{0}.model.js');
for(let i in models){
   let model = require(format.replace(/\{0\}/g,models[i]))();
   db[model.name]=model;
}
Object.keys(db).forEach(function(modelName){
   if('associate' in db[modelName]){
       db[modelName].associate(db);
   }
});

//test
let sql = function(){
   return db;
}
module.exports =sql