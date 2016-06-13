var express = require('express');
var parseServer = require('./routes/parse-server');
var parseDashboard = require('./routes/parse-dashboard');
var app = express();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', parseServer);
// make the Parse Dashboard available at /dashboard
app.use('/dashboard', parseDashboard);

app.listen(8080, function() {
  console.log('App running on port 8080.');
});