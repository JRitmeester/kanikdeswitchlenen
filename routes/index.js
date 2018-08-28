var express = require('express');
var router = express.Router();
var data = {};
var pgp = require('pg-promise')();

var conn = {
      host: 'dumbo.db.elephantsql.com',
      port: 5432,
      database: 'erjoyldv',
      user: 'erjoyldv',
      password: 'ovBuvC3crZojhh5xwRuSFgWYn6FL_DM7'
};
var db = pgp(conn);

router.get('/', function(req, res, next) {
   res.render('index', { title: '', data:[] });
});

router.get('/maghet/', function(req, res, next) {
  db.manyOrNone('SELECT available FROM switch')
    .then(data => {
      res.render('index', { title: '', data:data });
    })
    .catch(error => {
      console.log(error);
      res.render('index', { title: 'ERROR', data:[] });
    });
});
module.exports = router;
  


