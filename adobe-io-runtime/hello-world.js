
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
    console.log('Returning hello: ' + params.hello);
    returnObject.body = Buffer.from(JSON.stringify({
      "Bonjour1": params.hello
    })).toString('base64');
    return returnObject;
  } 
};


