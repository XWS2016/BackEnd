var express = require('express');
var bodyParser = require('body-parser');
var items = [];
var router = express.Router();
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());
router.route('/')
  .get(function(req, res, next) {
    res.send({
      status: 'Items found',
      items: items
    });
  })
  .post(function(req, res, next) {
    items.push(req.body);
    res.send({
      status: 'Item added',
      itemId: items.length - 1
    });
  })
  .put(function(req, res, next) {
    items = req.body;
    res.send({
      status: 'Items replaced'
    });
  })
  .delete(function(req, res, next) {
    items = [];
    res.send({
      status: 'Items cleared'
    });
  });
router.route('/:id')
  .get(function(req, res, next) {
    var id = req.params.id;
    if (id && items[Number(id)]) {
      res.send({
        status: 'Item found',
        item: items[Number(id)]
      });
    } else {
      res.send(404, {
        status: 'Not found'
      });
    }
  })
  .all(function(req, res, next) {
    res.send(501, {
      status: 'Not implemented'
    });
  });
var app = express()
  .use('/todo', router)
  .listen(3000);
