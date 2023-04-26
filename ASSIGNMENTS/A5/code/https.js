var homeDir = require('path').join(require('os').homedir());
require('greenlock-express').create({
  version: 'draft-11'
, server: 'https://acme-v02.api.letsencrypt.org/directory'
//, server: 'https://acme-staging-v02.api.letsencrypt.org/directory'  // staging
, email: 'rauchynn@asu.edu'                                     // CHANGE THIS
, agreeTos: true
, approveDomains: [ 'rauchynn.httpsexample.xyz', 'www.rauchynn.httpsexample.xyz' ]              // CHANGE THIS
, store: require('greenlock-store-fs')
, configDir: homeDir
//, app: require('express')().use('/', function (req, res) {
//    res.setHeader('Content-Type', 'text/html; charset=utf-8')
//    res.end('Hello, World!\n\n💚 🔒.js');
//  })
, app: require('./server.js')
//, communityMember: true
}).listen(8080, 8443);

