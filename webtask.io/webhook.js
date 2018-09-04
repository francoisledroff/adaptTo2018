
var express = require('express');
var Webtask = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.get('/log', function (req, res) {
  var result = "No challenge";
  if (req.query["challenge"]){
    result = req.query["challenge"]
    console.log("got challenge: " + req.query["challenge"]);
  } else {
    console.log("no challenge")
  }
  res.status(200).send(result)
});

app.post('/log', function (req, res) {
  console.log(req.body)
  res.writeHead(200, { 'Content-Type': 'application/text' });
  res.end("pong");
});

module.exports = Webtask.fromExpress(app);