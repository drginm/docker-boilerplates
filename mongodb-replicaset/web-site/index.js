console.log("Oh Yeah!")
const express = require('express')
const database = require('./database')
const app = express()

app.get('/', function (req, res) {
  database.initializeMongo();

  res.send('Hello Mongo!!! ( ͡° ͜ʖ ͡°)');
})

app.get('/testFind', function (req, res) {
  database.Kitten.find(function (err, kittens) {
    if (err) res.status(500).send({ error: err });
    console.log(kittens);
    res.json(kittens);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
