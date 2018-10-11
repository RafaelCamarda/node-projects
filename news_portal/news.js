var http = require('http');

var server = http.createServer( function(req, res){
  var url = req.url;

  if(url === '/technology'){
    res.end("<html><body>Technology News</body></html>");
  } else {
    res.end("<html><body>News Portal</body></html>");
  }
  
});

server.listen(3000);
