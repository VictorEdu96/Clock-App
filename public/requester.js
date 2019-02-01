function getDeviceHour() {
  var fecha = new Date();
  let date;
  date = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
  document.getElementById('deviceHour').innerHTML = date;
}

function getServerHour() {
  fetch('http://localhost:3000/srvhour')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(JSON.stringify(myJson));
    var fecha = desJSON(myJson);
    document.getElementById('serverHour').innerHTML = fecha;
  });
}

function desJSON(jsonObj){
  let date = "";
  let hour = jsonObj.Hour;
  let minutes = jsonObj.Minutes;
  let seconds = jsonObj.Seconds;
  date = String(hour) + ":" + String(minutes) + ":" + String(seconds);
  return date;
}

setInterval(getDeviceHour,1000)
setInterval(getServerHour,1000)
