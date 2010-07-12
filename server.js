var sys = require('sys'),
    fs = require('fs'),
    http = require('http'),
    Connect = require('connect');


// Data (will be backed by Redis soon)
// ============================================================================

var documents = {
  'unveil': { name: 'Unveil.js', descr: 'Data driven visualization toolkit', host: 'localhost', port: 50000, path: '/index' },
  'ndogen': { name: 'Ndogen', descr: 'Ndogen Syntax Documentation', host: 'localhost', port: 50000, path: '/examples.syntax' }
};


// Documents
// ============================================================================

function document(app) {
  
  // List
  // --------------------------------------------------------------------------
  
  app.get('/', function(req, res, params){
      var body;
      
      body = JSON.stringify(documents);

      res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Content-Length': body.length
      });
      res.end(body, 'utf8');
  });
  
  // Show
  // --------------------------------------------------------------------------
  app.get('/:id/:op?', function(req, res, params) {
      if (!documents[params.id])
        return;
    
      var host = documents[params.id].host,
          port = documents[params.id].port || 80,
          path = documents[params.id].path;
      
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

var Server = module.exports = Connect.createServer(
  Connect.staticProvider(__dirname + '/public'),
  Connect.logger()
);

// plug in modules here
Server.use("/documents/", Connect.router(document));