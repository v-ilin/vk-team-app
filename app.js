'use strict';

var express          = require( 'express' )
  , app              = express()
  , http             = require('http')
  , VKApi            = require('node-vkapi');

app.set('views', __dirname + '/static/views'); 
app.engine('html', require('ejs').renderFile);

const VK    = new VKApi({
  app: {
    id: 6186779,
    secret: 'UZDM1flh2qzFIaXEwqBQ'
  }
});

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(3000, "vk-team-app.local", function(){
  var host = this.address().address;
  var port = this.address().port;
  console.log('App listening at http://%s:%s', host, port);
});