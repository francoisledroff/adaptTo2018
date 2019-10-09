
var request = require('request');

function main(params) {
  var returnObject = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: ""
  };

  /* handle the hello */
  if (params.hello) {
    console.log('Returning hello: ' + params.challenge);
    returnObject.body = new Buffer(JSON.stringify({
      "bonjour": params.hello
    })).toString('base64');
    return returnObject;
  } 
};

exports.main = main;

