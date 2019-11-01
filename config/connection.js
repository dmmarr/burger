var mysql = require ("mysql");
var connection;
if (process.env.JAWDB_URL){
    connection = mysql.createConnection(process.env.JAWDB_URL);
} else{
    connection = mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password : 'hacktheplanet',
        database : 'todoagain_db'
    })
}
connection.connect();
module.exports = connection;

// var connection = mysql.createConnection({
// host: "localhost",
// port: 3306,
// user: "root",
// password: "",
// database : "burgers_db"
// });
// connection.connect(function(err){
// if (err){
//     console.log("error connecting:" + err.stack);
//     return;
// }
// console.log("connected as id" + connection.threadId)
// })
// module.exports = connection;