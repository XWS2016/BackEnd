// pronalazenje dokumenata

// koristimo mongoose
var mongoose = require('mongoose');
// konektujemo se na lokalnu instancu mongodb
mongoose.connect('mongodb://localhost/primer1');
// koristimo mongoose shemu koju smo kreirali u folderu model
var BlogEntry = require('../app/model/blogEntry');

// selektujemo dokumente koji imaju title koji odgovara zadatom regexu
BlogEntry.find({ title: /llo Wor/i }, function(err, entry) {
  if (err) throw err;

  // prikazemo selektovane vrednosti
  console.log(entry);
});
