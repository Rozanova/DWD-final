console.log('server is starting');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public/images'));
var fs = require('fs');
var mongojs = require('mongojs');

var config = require('./config.js')




// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
// app.use(urlencodedParser);
//
// //for wtiting to a json file
// //https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
//
// app.use(express.static('public'));
// //for the json saveNameToPublicFolder
// var obj = {
//    table: []
// };
// //write data to JSON
// obj.table.push({name: "katyatest"});
// //Convert it from an object to string with stringify
// var json = JSON.stringify(obj);
//
// //use fs to write the file to disk
// var fs = require('fs');
// fs.writeFile('./public/names.json', json, 'utf8', callback() {
//   if(callback) {
//       console.log('[write auth]: ' + err);
//         if (fail)
//           fail(error);
// }
// );
//5. if you want to append it read the json file and convert it back to an object
// fs.readFile('./public/names.json', 'utf8', function readFileCallback(err, data){
//   if (err)
//     {
//       console.log(err);
//     }
//     else
//     {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({name: 2, square: 3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back
//   }
// });
//



//listen port


app.listen(3726, function () {
  console.log('Example app listening on port 3726!');
});

// trying to make images viewable


//REQUEST AND RESPONSE

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// // getting a query sring vaue
// app.get('/a', function(req, res) {
//   var textvalue = req.query.name;
// 	 var data = {name: textvalue};
//     res.render('names_patch.ejs', data);
// });

//for the input box and submit

app.get('/sketch', function (req, res) {
    res.render('sketch.ejs');
});
//posting to harbage
app.post('/sketch', function (req, res) {
  var textvalue = req.body.textfield;
  var textvalue2 = req.body.textfield2;
  var textvalue3 = req.body.textfield3;
  var textvalue4 = req.body.textfield4;
  var data = {name: textvalue, adjective: textvalue2, adjective2: textvalue3, drink: textvalue4};
  res.render('results.ejs', data);
  //save data to json
  saveNameToPublicFolder(firstname, function (err) {
    if (err) {
      res.status(404).send('User not saved');
      return;
    }
  });
});


//new from Shawn's notes
// var db = mongojs(config.username + ":" + config.password + "@soundbits-lyi1j.mongodb.net/SoundBits");
var db = mongojs(config.username + ":" + config.password + "@ds125588.mlab.com:25588/dwds",["visitors"]);
var db = mongojs('test:test@ds125588.mlab.com:25588/dwd',["visitors"]);

// from Shawn's class notes
//To insert a record into the database:



db.mycollection.save({"name":textvalue}, function(err, saved) {
  if( err || !saved ) console.log("Not saved");
  else console.log("Saved");
});


// function saveNameToPublicFolder(firstname, callback) {
//   fs.writeFile('./public/names.json', JSON.stringify(firstname), callback);
// }
