var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author:'Jessica Selene Mondragón Martínez',appName:'WebApp', company:'Awsome Software' });
});
//Agregar Ruta *7
router.get('/greeting',function(req, res, next){
  res.send('Jessica Mondragón <3')
});


module.exports = router;
