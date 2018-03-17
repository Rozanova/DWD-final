console.log('server is starting');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

//for wtiting to a json file

//
// function savePersonToPublicFolder(person, callback)
// {
//   fs.writeFile('./public/names.json', JSON.stringify(person), callback);
// };
//
//
//
//
// app.use(express.static('public'));
//
//
// app.get('/results', function (req, res) {
//   var textvalue = req.body.textfield;
//   var data = {name: textvalue};
//
//     res.send('User saved');
//
//   savePersonToPublicFolder(person, function(err) {
//     if (err) {
//       res.status(404).send('User not saved');
//       return;
//     }
//
//
//   });
// });
//

// app.listen(port, function() {
//   console.log('server up and running at port: %s', port);


//

// fs sync based on Shiffman video https://www.youtube.com/watch?v=6iZiqQZBQJY
var fs = require('fs');
var allNamesData = fs.readFileSync('names.json');
names = JSON.parse(allNamesData);
console.log(names);



app.listen(3800, function () {
  console.log('Example app listening on port 3800!')
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
    // var data = {name: textvalue};
    var data = JSON.stringify({name: textvalue}, null, 2);
// this was from shiffman video
    fs.writeFile(names.json, data, finished);
    function finished()
      {
      console.log('all set');
      }
    res.render('results.ejs', data);
    //save data to json

});
