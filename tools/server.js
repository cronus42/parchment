/*

Parchment server
================

Copyright (c) 2013 The Parchment Contributors
BSD licenced
https://github.com/curiousdannii/parchment

*/
var compression = require('compression')
var express = require( 'express' );
var app = express();

app.use( compression() );
app.use( express.static( __dirname + '/../' ) );

module.exports = app

