//Call out the funtion of the ORM
var orm = require('../config/orm.js');
var burger = {
  selectAll: function(callback){
    orm.selectAll ("burger", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb){
    orm.insertOne('burger', cols, vals, function(res){
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne('burger', objColVals, condition, function(res){
      cb(res);
    });
  }

}//variable
module.export = burger
