var express = require ('express')
var router = express.Router();
var burger = require('../model/burger.js');
//======================GET BURGER DATA======================
router.get('/', function(req, res){
  //create an object that hold infromation from burger table
  burger.selectAll(function(data){
    var newBurger = {burger: data};
    res.render("index", newBurger);
  });
});
//======================ADD NEW BURGER======================
router.post('api/burger', function (req, res){
  burger.insertOne ([
    'burger_name', 'devour'
  ],
  [
    req.body.burger_name, req.body.devour
  ], function(result) {
    res.redirect("/");
  });

});
//====================PUT UPDATE============================
router.put('api/burger/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devour: req.body.devour
  }, condition, function(result) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
