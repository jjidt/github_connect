var express = require('express'),
	router = express.Router(),
	https = require('https');

/* GET home page. */
router.get('/', function(req, res) {
 	res.render('index', { title: 'Express' });
});

router.get('/portland', function(req, res) {
	var options = {
  		hostname: 'api.github.com',
  		path: '/search/users?q=repos%3A1+location%3Aportland&per_page=100&page=4',
  		method: 'GET',
  		headers: {
  			"User-Agent": "github_connect"
  		}
	};

	var req = https.request(options, function(response) {
		response.on('data', function(d) {
    		data = d;
  		});
	});
	req.end();
	// res.send("BLAHALALA");
});

module.exports = router;
