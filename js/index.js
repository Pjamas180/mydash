window.onload = function() {
  var dash = new Dash()
  var basil = new window.Basil();
  var greeting = document.getElementById("greeting").firstChild.nodeValue; 

  dash.initialize(basil) 
  var gui = new dat.GUI();
  dat.GUI.toggleHide();

  updateClock();
  setInterval('updateClock()', 10000 )

  var themes = gui.add(dash, "theme", ["sleepwell", "goodmorning", "goodafternoon", "goodevening", "goodnight"])

  switch(greeting) {
    case "Good Night, Pj":
    break;

    case "Good Morning, Pj":
    break;

    case "Good Afternoon, Pj":
    break;

    case "Good Evening, Pj":
    break;

    case "Sleep Well, Pj":
    break;
  }

  themes.onChange(function(value) {
    dash.changeMode(value);
  })

  /*if(basil.keys().indexOf('done-tutorial') == -1) {
    alertify.log("Press H for settings");
  }*/

  bindKeyStrokes(dash);

  $.ajax({
    url: "https://geoip-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function( location ) {
      $('#postal').html(location.postal);
      $('#countrycode').html(location.country_code);
      console.log(location.postal);
      console.log(location.country_code);


    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?zip=" + location.postal + "," + location.country_code + "&APPID=37f1412bbf06612025ba6c6948dc13cd",
      dataType: "jsonp",
      success: function(json) {
        
          // Set the HTML weather div here.
          console.log(json.coord);
          console.log(json.main);
          console.log(json.weather[0].main);
          console.log(json.weather[0].icon);
          var kelvin = json.main.temp;
          var weather = json.weather[0].main;
          var fahrenheit= Math.round(9 / 5 * (kelvin - 273) + 32);
          $("#weather").html('<font size="2">' + fahrenheit + "&#176 F: " + weather + '</font>');
          $('#weathericon').prepend('<img src="//C:\\Users\\randy\\dev\\proj\\mydash\\weathericon\\' + json.weather[0].icon + '.png" width="40" height="40" class=center/>');
          //C:\\Users\\randy\\dev\\proj\\mydash\\weathericon\\' + json.weather[0].icon + '
          //http://openweathermap.org/img/w/' + json.weather[0].icon + '

        //var ob = json.response.ob;
        //$('#js').html('The current weather in Seattle is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°');
        
      }
    });

    }
  });


  // Clear the URL bar.
  window.history.pushState("string","Title","");

}

