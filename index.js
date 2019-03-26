var express = require('express');
var app = express();
var server = require('http').Server(app);
var router = express.Router();
var bodyParser = require('body-parser')
var path = require('path');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static('public'));

app.get('/lol', (req, res) => {
  res.send("I like tits");
})

server.listen(3000, () => {
  console.log(`Listening on ${server.address().port}`);
});
