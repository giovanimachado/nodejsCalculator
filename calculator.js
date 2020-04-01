// steps to create the server:
// 1 - starts npm: npm init and fill the information;
// 2 - Install express: npm install express --save
// 3 - require express
// 4 - define the app const
// 5 - "add" nodemon to the project: "nodemon server.js"


const express = require("express");
// to receive that is necessary to instal body-parser: npm install body-parser
// the require it
const  bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// Express uses bodyParser
// extended allows to post nested objects.
// other options: bodyParser.text, bodyParser.json

app.get("/", function(req, response){
  //console.log(__dirname); // log request information on the console
  // res.sendFile(path [, options] [, fn])
  response.sendFile(__dirname+"/index.html"); // Send this as answer for the request
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
  var height = Number(req.body.height);
  var weight =  Number(req.body.weight);
  var bmi = (weight / Math.pow(height,2));
  res.send("The calculated BMI is :" + bmi);
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1); // parsed version of http request - num1 was defined
  var n2 = Number(req.body.num2);
  var result = n1+n2;
  res.send("The sum is :"+ result);

  //in html file
});


app.listen(3000, function(){
  console.log("Server is running on port 3000")
});



// This callback function defines what is going to happen when an browser sends a request
