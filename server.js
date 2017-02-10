
'use strict';
///////////////////////////////////////////////////////////
////////  chaoticreach universal channel integrator ///////
///////            version 0.5.0                   ///////
/////////////////////////////////////////////////////////
var botBuilder =      require('claudia-bot-builder');
var greeting =        require('greeting');
var fetch =           require('node-fetch');

module.exports = botBuilder(function(message) {
  if (message.text.match(/quote/i)) {
     return fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en').then(function(res) {
       return res.text();
     });
   } else {
     return greeting.random();
   }
});

// module.exports = bot;

/*

const excuse = require('huh');

module.exports = botBuilder(request =>
  `Thank you for sending your request to ${request.text}. Your message is very important to us. The problem was caused by ${excuse.get()}`
);
*/
