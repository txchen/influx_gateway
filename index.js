/* eslint-disable */

// entry point, do not use babel syntax here in this file, so that 'node' can launch this.
require('babel/register')

// read .env file, for azure, set properties in portal
require('dotenv').config({silent: true})

// ES5 code here
var server = require('lib/app')

var port = process.env.PORT || 6789

server.listen(port, function () {
  console.log('influx-gateway listening on http://localhost:' + port)
})
