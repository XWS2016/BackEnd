// primer snimanja u bazu

// koristimo mongoose
var mongoose = require('mongoose');
// konektujemo se na lokalnu instancu mongodb
mongoose.connect('mongodb://localhost/primer1');
// koristimo mongoose model koju smo kreirali u folderu model
var BlogEntry = require('../app/model/blogEntry');

// uklonimo sve dokumente iz kolekcije BlogEntry
// {} selektuje sve dokumente
BlogEntry.remove({}, function() {
  // kreiramo korisnika
  var helloWorldEntry = new BlogEntry({
    title: 'Hello World!',
    description: 'prvi blog post',
    entry: 'Lorem ipsum dolor sit amet, ' +
      'consectetur adipiscing elit. Sed in est mollis, ' +
      'vehicula eros sit amet, gravida arcu. Vestibulum ' +
      'id semper massa. Etiam molestie tempor nunc nec elementum.' +
      ' In sagittis dapibus placerat. Suspendisse convallis ' +
      'elit nibh, eget ullamcorper ligula hendrerit quis.'
  });

  // kreirani objekat snimimo u bazu
  helloWorldEntry.save(function(err) {
    if (err) throw err;

    console.log('Uspesno sacuvano!');
  });

});
