module.exports = function (io) {

	var https = require('https');

	io.on('connection', function (socket) {
		socket.emit('news', { hello: 'world' });
		console.log('buttfarts');
		socket.on('my other event', function (data) {
			console.log(data);
	  	});

		var options = {
  		hostname: 'api.github.com',
  		path: '/search/users?q=repos%3A1+location%3Aportland&per_page=100&page=4',
  		method: 'GET',
  		headers: {
  			"User-Agent": "github_connect"
  			}
		};

		var req = https.get(options, function(response) {
			response.on('data', function(d) {
				debugger;
    			socket.emit('news', "got some data")
  			})
  			.on('error', function(err){
  				console.log(err);
  			});
		});
	});
}