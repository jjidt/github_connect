module.exports = function (io) {

	var https = require('https');

	io.on('connection', function (socket) {
		console.log('client connected to socket');
		socket.on('userSelect', function (data) {
			console.log(data);
	  	});

		var options = {
  		hostname: 'api.github.com',
  		path: '/search/users?q=repos%3A1+location%3Aportland&per_page=100&page=7',
  		method: 'GET',
  		headers: {
  			"User-Agent": "github_connect"
  			}
		};

		var str = '';
		var req = https.get(options, function(response) {
				response.on('data', function(d) {
					str += d;
				});
				response.on('end', function(){
					var responseObject = JSON.parse(str);
	    			socket.emit('news', responseObject);
	  			});
	  		})
  			.on('error', function(err){
  				console.log(err);
  			});
		});
}