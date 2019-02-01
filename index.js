const express = require('express');
const path = require('path')
const app = express();

//Setting headers to Access-Control so everyone can request.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Rendering clock app using ejs.
app.get('/', (req, res) => {
  res.render('index.ejs');
});

//Function to create date object and pass it through stringify
app.get('/srvhour', (req, res) => {
  var date = new Date();
  var objDate = {
    Hour: date.getHours(),
    Minutes: date.getMinutes(),
    Seconds: date.getSeconds()
  };
  res.end(JSON.stringify(objDate));
});

//Static folder where all the files are stored.
app.use(express.static(path.join(__dirname, '/public')));

//Views from the aplication using EJS engine.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Server listening in port 3000.
app.listen(3000, function() {
  console.log("Servidor Funcionando");
})
