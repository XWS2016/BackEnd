var MongoClient = require('mongodb').MongoClient;
var demoPerson = {
  name: 'Pera',
  lastName: 'Peric'
};
var findKey = {
  name: 'Pera'
};
MongoClient.connect('mongodb://127.0.0.1:27017/demo', function(err, db) {
  if (err) throw err;
  var collection = db.collection('people');
  collection.insert(demoPerson, function(err, docs) {
    demoPerson.lastName = 'Petrovic';
    collection.save(demoPerson, function(err) {
      console.log('Updated');
      collection.find(findKey).toArray(function(err, results) {
        console.log(results);
        // cleanup
        collection.drop(function() {
          db.close();
        });
      });
    });
  });
});
