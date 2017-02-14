
'use strict';

require('dotenv').config()
///////////////////////////////////////////////////////////
////////  chaoticreach universal channel integrator ///////
///////            version 0.5.0                   ///////
/////////////////////////////////////////////////////////
var botBuilder =      require('claudia-bot-builder');
var fetch =           require('node-fetch');

module.exports = botBuilder(function(message) {
   return fetch('http://chaotic.ngrok.io/api/message').then(function(res) {
       return res.text();
     });
});
