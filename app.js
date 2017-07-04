var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var data = { name: 'Jane' };

app.get('/', function(req, res){
  res.render('home', { user: data});
});

app.listen(4000, function() {
  console.log('server on 4000');
});
