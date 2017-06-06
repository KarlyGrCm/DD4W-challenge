var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:l1/:l2/:l3', function(req, res, next){
  let a = parseInt(req.params.l1);
  let b = parseInt(req.params.l2);
  let c = parseInt(req.params.l3);

  if((a + b) > c && (a + c) > b && (b + c) > a){
    res.json({'Resultado' : "Sí es triángulo."})
  } else {
    res.json({'Resultado' : "No es triángulo."})
  }
})

module.exports = router;
