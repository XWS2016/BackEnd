// pronalazenje dokumenata

// koristimo mongoose
var mongoose = require('mongoose');
// konektujemo se na lokalnu instancu mongodb
mongoose.connect('mongodb://localhost/primer1');
// koristimo mongoose shemu koju smo kreirali u folderu model
var BlogEntry = require('../app/model/blogEntry');

// get the date 1 month ago
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

//za selektovanje mozemo da koristimo MongoDB query sintaksu (https://docs.mongodb.org/manual/reference/operator/query/)

// selektujemo dokumente koji imaju title koji odgovara zadatom regexu
BlogEntry.find({ title: /llo Wor/i }).where('createdAt').gt(monthAgo).exec(function(err, entry) {
  if (err) throw err;

  // prikazemo selektovane vrednosti
  console.log(entry);
});
