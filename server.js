var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World. Its Kelly');
// });
app.use(express.static(__dirname + '/react-client/dist'));

app.get('/', (req, res) => {
  res.status(200).end();
});

app.listen(port, function() {
  console.log('plaidLink server started on: ' + port);
});
