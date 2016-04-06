// izmena dokumenta

// koristimo mongoose
var mongoose = require('mongoose');
// konektujemo se na lokalnu instancu mongodb
mongoose.connect('mongodb://localhost/primer1');
// koristimo mongoose shemu koju smo kreirali u folderu model
var BlogEntry = require('../app/model/blogEntry');

// selektujemo dokument koji imaju title Hello World!
BlogEntry.findOne({'title':'Hello World!'}, function(err, entry) {
  if (err) throw err;

  // izmenimo opis
  entry.description = 'Izmenjeni opis';

  // sacuvamo blog entry
  entry.save(function(err) {
    if (err) throw err;

    console.log('uspesno sacuvana izmena!');
  });

});
