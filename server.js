var sys = require('sys'),
    fs = require('fs'),
    http = require('http'),
    connect = require('connect'),
    setup = require('./conf/setup');


// Data (will be backed by Redis soon)
// ============================================================================



// Documents
// ============================================================================

function document(app) {
  
  // List
  // --------------------------------------------------------------------------
  
  app.get('/documents', function(req, res, next){
      var body;
      
      body = JSON.stringify(setup.documents);

      res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Content-Length': body.length
      });
      res.end(body, 'utf8');
  });
  
  // Show
  // --------------------------------------------------------------------------
  app.get('/documents/:id', function(req, res, next) {
      if (!setup.documents[req.params.id])
        return;
          
      var host = setup.documents[req.params.id].host,
          port = setup.documents[req.params.id].port || 80,
          path = setup.documents[req.params.id].path;
      
      // document knowledge is in the cloud
      var service = http.createClient(port, host);
      var request = service.request('GET', path, {'host': host});
      request.end();
      res.writeHead(200, {'Content-Type': 'text/plain'});
      
      request.addListener('response', function (response) {
        response.addListener('data', function (chunk) {
          res.write(chunk);
        });
        response.addListener('end', function() {
          res.end();
        });
      });
  });
}

var server = connect.createServer(
  connect.logger(),
  connect.router(document),
  connect.staticProvider(__dirname + '/public')
);

server.listen(3000);