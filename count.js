var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var age = process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) {
		console.log('Error connecting');
	}

  var database = db.db('learnyoumongo');

  database.collection('parrots').count({age: {$gt: +age} }, function(err, count) {
    if (err) {
			console.log('Error reading');
		}
    console.log(count);
    db.close();
  });
});