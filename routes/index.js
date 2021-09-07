var express = require('express');
var router = express.Router();

var connection2 = require('./connection');

router.post('/addbook', function (req, res) {


  const bookdata = {

    // idBooks, ISBN, title, language, auther, publication

    ISBN: req.body.ISBN,
    title: req.body.Title,
    language: req.body.flexRadioDefault,
    auther: req.body.Author,
    publication: req.body.Publication


  }

  connection2.query("insert into books set?", bookdata, function (err, result) {

    if (err) {
      console.error("Unable to save details");
    } else {
      res.redirect('/');
    }

  });

});
router.get('/updatebook/:id', function (req, res) {


  var idBooks = req.params.id;


  connection2.query("select * from books where idBooks = ?", [idBooks], function (err, result) {

    if (err) {
      console.error("Unable to update selected details");
    } else {
      res.render('edit', { books: result });
    }
  });
 

});


module.exports = router;


// set DEBUG=myapp:* & npm start
// npm start