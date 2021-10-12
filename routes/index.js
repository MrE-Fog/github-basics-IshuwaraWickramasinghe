var express = require('express');
var router = express.Router();

var connection2 = require('./connection');

/* GET home page. */
router.get('/', function (req, res, next) {

  // res.render('index', { title: 'Book Details' });


  connection2.query('SELECT * FROM books', function (err, rows) {


    if (err) {
      throw err;

    } else {
      res.render('index', { books: rows });

    }

  });

});

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

router.get('/deletebook/:id', function (req, res) {

  var idBooks = req.params.id;

  connection2.query("delete from books where idBooks = ?", [idBooks], function (err, result) {

    if (err) {
      console.error("Unable to delete selected details");
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

router.post('/bookupdatedb/:id', function (req, res) {


  var ISBN = req.body.ISBN;
  var title = req.body.Title;
  var language = req.body.flexRadioDefault;
  var auther = req.body.Author;
  var publication = req.body.Publication;
  var idBooks = req.params.id;

  
  connection2.query("UPDATE books set ISBN=?,title=?,language=?,auther=?,publication=?  where idBooks = ?", [ISBN,title,language,auther,publication,idBooks], function (err, result) {

    if (err) {
      console.error("Unable to update selected details");
    } else {
      res.redirect('/');
    }
  });
 

});


module.exports = router;


// set DEBUG=myapp:* & npm start
// npm start