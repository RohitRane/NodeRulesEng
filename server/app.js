let express = require('express')
let app = express();
let httpServer = require('http').Server(app);
let db=require('./config/db')
let config = require('./config/environment');
require('./config/express')(app)
require('./routes/route.js')(app)
require('./sqldb');
// let server = http.createServer(app);

db.connection.sync({force: config.seedDb})
/*.then(() => {
	if( config.seedDb){
		console.log("Seeding databse--------------------->");
 		return require("./seed")();
	}
})*/
.then(startServer)
.catch((err) => {
	console.log("Server failed to start due to error: ", err);
})

function startServer() {
	httpServer.listen(config.port, config.ip, function() {
		console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
	});
}
exports = module.exports = app
