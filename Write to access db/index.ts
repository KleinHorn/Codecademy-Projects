// Get the adodb module
var ADODB = require('node-adodb');
ADODB.debug = true;

// Connect to the MS Access DB
var connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\davek\Documents\Database1.accdb;Persist Security Info=False;');

// Query the DB
connection.query('SELECT * FROM [TestTable];').on('done', function (data: any) {
    console.log('Result: ' + data);
  })