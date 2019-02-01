const express = require('express');
const path = require('path')
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req,res) => {
  res.render('index.ejs');
});

app.get('/srvhour', (req,res) => {
  var date = new Date();
  var objDate = {
    Hour : date.getHours(),
    Minutes: date.getMinutes(),
    Seconds: date.getSeconds()
  };
  res.end(JSON.stringify(objDate));
});

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.listen(3000, function () {
  console.log("Servidor Funcionando");
})
