const http = require('http'),
	https = require('https'),
	fs = require('fs'),
	express = require('express'),
	bodyParser = require('body-parser');
	appRoutes = require('./routes/app'),
	config = require('./config');

const app = express();
var httpsServer, httpServer;

//create http server
httpServer = http.createServer(app);

try {
	//load certification files
	var privateKey  = fs.readFileSync('/etc/letsencrypt/live/swaps.tf/privkey.pem', 'utf8');
	var certificate = fs.readFileSync('/etc/letsencrypt/live/swaps.tf/cert.pem', 'utf8');
	var credentials = {key: privateKey, cert: certificate}

	//create https server
	httpsServer = https.createServer(credentials, app);

	//forward all traffic to HTTPS
	app.all('*', function(req, res, next) {
		if(req.secure) return next();
		res.redirect('https://' + req.hostname + req.url);
	});
} catch (err) {
	//https certs not found
	console.log('HTTPS certs not found, falling back to HTTP.');
}

//Suppport for parsing HTTP bodies
app.use(bodyParser.urlencoded({ extended: false }));

//Point to static asset directory
app.use(express.static('public'));

//Define routes
app.use('/', appRoutes);

//Start server
httpServer.listen(config.http_port, function(){
	console.log('HTTP listening on port ' + config.http_port);
});

if(httpsServer) {
	httpsServer.listen(config.https_port, function(){
		console.log('HTTPS listening on port ' + config.https_port);
	});
}
