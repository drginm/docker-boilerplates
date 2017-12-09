const mongoose = require('mongoose');

const DATABASE_CONECTION = 'mongodb://mongo-rs0-1,mongo-rs0-2,mongo-rs0-3/test';

var kittySchema = mongoose.Schema({
  name: String
});

Kitten = exports.Kitten = mongoose.model('Kitten', kittySchema);

exports.initializeMongo = function() {
  console.log('Disconnecting from db just in case!');
  mongoose.disconnect();

  mongoose.connect(DATABASE_CONECTION);

  console.log('Trying to connect to ' + DATABASE_CONECTION);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: We might not be as connected as I thought'));
  db.once('open', function() {
    console.log('We are connected you and I!');
    addRandomCat();
  });
}

var addRandomCat = function() {
  var silence = new Kitten({
    name: 'Silence' + Math.random()
  });

  silence.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('There is a new random cat in the neighborhood');
  });
}
