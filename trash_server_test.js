console.log('server is starting');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

//for wtiting to a json file


function savePersonToPublicFolder(person, callback)
{
  fs.writeFile('./public/names.json', JSON.stringify(person), callback);
};

var fs = require('fs');
app.use(express.static('public'));


app.get('/results', function (req, res) {
  var textvalue = req.body.textfield;
  var data = {name: textvalue};

    res.send('User saved');

  savePersonToPublicFolder(person, function(err) {
    if (err) {
      res.status(404).send('User not saved');
      return;
    }


  });
});


// app.listen(port, function() {
//   console.log('server up and running at port: %s', port);


//




app.listen(3700, function () {
  console.log('Example app listening on port 3700!')
});





//REQUEST AND RESPONSE

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// // getting a query sring vaue
// app.get('/a', function(req, res) {
//   var textvalue = req.query.name;
// 	 var data = {name: textvalue};
//     res.render('names_patch.ejs', data);
// });

//for the input box and submit

app.get('/sketch', function(req, res) {
    res.render('sketch.ejs');
});
//posting to harbage
app.post('/sketch', function(req, res) {
    var textvalue = req.body.textfield;
    var data = {name: textvalue};

    res.render('results.ejs', data);
    //save data to json

});
