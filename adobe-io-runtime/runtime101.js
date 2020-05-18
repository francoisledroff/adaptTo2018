function main(params) {
  // log the parameters to stdout
  console.log('params:', params);
  // if a value for name is provided, use it else use a default
  var name = params.name || 'inconnu';
  // if a value for place is provided, use it else use a default
  var place = params.place || 'quelque part';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: {msg:  'Bonjour, ' + name + ' de ' + place + '!'}
  };
}