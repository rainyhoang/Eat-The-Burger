

var connection = require('../config/connection.js')
//=======================================================
function printQuestionMarks(num){
  var arr = [];
  for (i = 0; i < num; i ++) {
  array.push("?");
  }
  return arr.toString();
}
//======================================================
function objToSql() {
  var arr = [];
  for (var key in obj){
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0){
        value ="'" + value + "'";
    }
    arr.push(key + "=" + value);
  }
}
  return arr.toString();
}


var orm =
{

//========================SELECT ALL======================
  selectAll: function(tableInput, callback){
    console.log('yoyoyoy')
    var queryString = 'SELECT * FROM ' + tableInput + ";"
    console.log(queryString)
    connection.query(queryString, function(err, result){
    //  if (err) {throw err;}
      console.log(err)
      callback (result);
    });
  },

//========================Insert Burger======================
  insertOne: function(table, cols, vals, callback) {
    var queryString = "INSERT INTO" + table;

    queryString += " (";
    queryString += col.toString();
    queryString += ") ";
    queryString += "VALUE (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log (querryString)
    connection.query(queryString, vals, function(err, result){
      if (err) {throw err;}
      callback (result);
    });
  },
//======================update Burger============================
  updateOne: function(tableInput, objectColVals, condition, callback){
    var queryString = "UPDATE" + tableInput;
    queryString +=" SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE";
    queryString += condition;
    console.log(queryString);
    connection.query(querryString, function(err, result){
      if(err) {throw err;}
      callback (result);
    });
  }

};//variable
module.exports = orm
//========================end ORM======================
