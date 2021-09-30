// Get the adodb module
var ADODB = require("node-adodb");
ADODB.debug = true;
// Connect to the MS Access DB
var connection = ADODB.open(
    "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:UsersdavekDocumentsDatabase1.accdb;Persist Security Info=False;"
);
// Query the DB
/*
connection
    .query('SELECT * FROM [TestTable];')
    .on('done', function (data) {
    console.log('Result: ' + data);
});
*/

console.log(connection.query('SELECT * FROM [Table1];'))

