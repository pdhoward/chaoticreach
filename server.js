
'use strict';
///////////////////////////////////////////////////////////
////////  chaoticreach universal channel integrator ///////
///////            version 0.5.0                   ///////
/////////////////////////////////////////////////////////
var botBuilder =      require('claudia-bot-builder');
var axios =           require('axios');

module.exports = botBuilder(function(message) {

   return axios.post('http://chaotic.ngrok.io/api/message',
                { body: message })
                .then(function(res) {
                    return res.text();
              });
        });
