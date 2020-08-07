var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) {
		console.log('Error connecting');
	}

  var database = db.db(process.argv[2]);

  var id = process.argv[4]

  database.collection(process.argv[3]).remove({ _id: id }
  	, function(err, data) {
    if (err) {
			console.log('Error reading');
		}
    db.close();
  });
});