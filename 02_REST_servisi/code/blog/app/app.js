var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// koristimo mongoose model koju smo kreirali u folderu model
var BlogEntry = require('../app/model/blogEntry');
var Comment = require('../app/model/comment');

mongoose.connect('mongodb://localhost/newsApp');


// konfigurisemo bodyParser()
// da bismo mogli da preuzimamo podatke iz POST zahteva
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // na kom portu slusa server

// ruter za blogEntries
var blogEntryRouter = express.Router(); // koristimo express Router

// definisanje ruta za blog
blogEntryRouter
  .get('/:id', function(req, res, next) {
    BlogEntry.findOne({
      "_id": req.params.id
    }).populate('comments').exec(function(err, entry) {
      // ako se desila greska predjemo na sledeci middleware (za rukovanje greskama)
      if (err) next(err);
      res.json(entry);
    });
  })
  .get('/', function(req, res) {
    BlogEntry.find({}, function(err, data, next) {
      res.json(data);
    });
  })
  .post('/', function(req, res, next) {
    var blogEntry = new BlogEntry(req.body);
    blogEntry.save(function(err, entry) {
      if (err) next(err);

      res.json(entry);

    });
  })
  .put('/:id', function(req, res, next) {
    BlogEntry.findOne({
      "_id": req.params.id
    }, function(err, blogEntry) {
      if (err) next(err);
      var newEntry = req.body;
      blogEntry.title = newEntry.title;
      blogEntry.description = newEntry.description;
      blogEntry.entry = newEntry.entry;
      blogEntry.save(function(err, blogEntry) {
        if (err) next(err);
        res.json(blogEntry);
      });
    });
  })
  .delete('/:id', function(req, res, next) {
    BlogEntry.remove({
      "_id": req.params.id
    }, function(err, successIndicator) {
      if (err) next(err);
      res.json(successIndicator);
    });
  });

// ruter za comments
var commentRouter = express.Router(); // koristimo express Router

commentRouter
.post('/blogEntry/:id',function(req, res, next) {
  var comment = new Comment(req.body);
  BlogEntry.findOne({"_id":req.params.id},function (err, entry) {
    if(err) next(err);
    comment.save(function (err, comment) {
      if(err) next(err);
      BlogEntry.findByIdAndUpdate(entry._id, {$push:{"comments":comment._id}}, function (err, entry) {
        if(err) next(err);
        res.json(entry);
      });
    });
  });
})
.delete('/:id', function (req, res, next) {
  Comment.remove({"_id":req.params.id},function (err, successIndicator) {
    if(err) next(err);
    res.json(successIndicator);
  });
});

// dodavanje rutera zu blogEntries /api/blogEntries
app.use('/api/blogEntries', blogEntryRouter);
// dodavanje ruter zu komentare /api/blogEntries
app.use('/api/comments', commentRouter);


//na kraju dodajemo middleware za obradu gresaka
app.use(function(err, req, res, next) {
  var message = err.message;
  var error = err.error || err;
  var status = err.status || 500;

  res.status(status).json({
    message: message,
    error: error
  });
});


// Pokretanje servera
app.listen(port);


console.log('Server radi na portu ' + port);
