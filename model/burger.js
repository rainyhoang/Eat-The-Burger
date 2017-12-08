//Call out the funtion of the ORM
var orm = require('../config/orm.js');
var burger = {
  selectAll: function(callback){
    orm.selectAll ("burger", function(res) {
      callback(res);
    });
  },

  insertOne: function(cols, vals, cb){
    orm.insertOne('burger', cols, vals, function(res){
      callback(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne('burger', objColVals, condition, function(res){
      callback(res);
    });
  }

}//variable
module.exports = burger
