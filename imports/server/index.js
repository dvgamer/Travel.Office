const request     = require('request');
const bodyParser  = require('body-parser');
const moment      = require('moment');

// Add two middleware calls. The first attempting to parse the request body as
// JSON data and the second as URL encoded data.

Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded({ extended: false }));

Picker.route('/API-Auth/Login/', function(params, req, res, next) {
  res.writeHead(200, {"Content-Type": "application/json"});

  // client_id: sfq324;egv9w2;3trsggsdsdf
  // secret_id: lkjgfdsasdfsegsdfsdf

  res.end(JSON.stringify({ success: true, token: '' }));
});

import './thaibulksms/api-1.7.js';
import './travelport/webservice.js';
import './sendgrid/email.js';
// import './sendgrid/email-template.js';