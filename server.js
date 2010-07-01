var sys = require('sys'),
    fs = require('fs'),
    http = require('http'),
    Connect = require('connect');


// Data (will be backed by Redis soon)
// ============================================================================


// http://localhost:50000/get_resource/?uri=examples.syntax
var documents = [
  { name: 'Ndogen Syntax', host: 'localhost', port: 50000, path: '/get_resource/?uri=examples.syntax' },
  { name: 'Test', host: 'ma.zive.at', path: '/json/turnover.json' }
];


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
      var host = documents[params.id-1].host,
          port = documents[params.id-1].port || 80,
          path = documents[params.id-1].path;

      
      sys.puts(host);
      sys.puts(path);
      sys.puts(port);
      
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