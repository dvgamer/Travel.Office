Picker.route('/API-v3/SMS/Callback/', function(params, req, res, next) {
  res.writeHead(200, {"Content-Type": "application/json"});
  let url = require('url').parse(req.url, true);

  console.log(url.query);
  
	res.end();
});

Picker.route('/API-v3/SMS/', function(params, req, res, next) {
  res.writeHead(200, {"Content-Type": "application/json"});
  let url = require('url').parse(req.url, true);

  // number: 09xxxx,09xxxx
  // sender: Member
  // message: asdasdasdasdasdasdasdasdasdasdasdasdasdasd
  console.log(url.query);
  
	res.end();
});

