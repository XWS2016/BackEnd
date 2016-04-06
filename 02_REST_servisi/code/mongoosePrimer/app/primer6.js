// brisanje dokumenta

// koristimo mongoose
var mongoose = require('mongoose');
// konektujemo se na lokalnu instancu mongodb
mongoose.connect('mongodb://localhost/primer1');
// koristimo mongoose shemu koju smo kreirali u folderu model
var BlogEntry = require('../app/model/blogEntry');

BlogEntry.findOneAndRemove({ title: 'Hello World!' }, { description: 'ponovo izmenjena vrednost' }, function(err, entry) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(entry);
});
