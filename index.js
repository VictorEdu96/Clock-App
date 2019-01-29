const express = require('express');
const path = require('path')
const app = express();
var morgan = require('morgan')

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
app.use(morgan('tiny'))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.listen(3000, function () {
  console.log("Servidor Funcionando");
})
