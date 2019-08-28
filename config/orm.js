var connection = require("./connection.js");
var orm = {
 selectAll: function(cb, tableInput) {
   var queryString = "SELECT ?? FROM ??";
   connection.query(queryString, [ tableInput], function(err, result) {
     if (err) throw err;
     cb(result);
   });
 },
 insertOne: function(){
  connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
    if (err) throw err;
    cb(result);
});
 },
 selectWhere: function(tableInput, cb, valOfCol) {
   connection.query( "INSERT INTO" + tableInput + "(burger_name) VALUES ('" + valOfCol + "');" , function(err, result) {
     if (err) throw err;
     cb(result);
   });
 },
};
module.exports = orm;
