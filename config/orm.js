

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
    var queryString = 'SELECT * FROM' + tableInput + ";";
    connection.query(queryString, function(err, result){
      if (err) {throw err;}
      console.log(result)
      callback (result);
    });
  },

//========================Insert Burger======================
  insertOne: function(table, cols, val, callback) {
    var queryString = "INSERT INTO" + table;

    queryString += " (";
    queryString += col.toString();
    queryString += ") ";
    queryString += "VALUE (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log (querryString)
    connection.query(queryString, function(err, result){
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
module.export = orm
//========================end ORM======================
