window.onload = function() {
  var dash = new Dash()
  var basil = new window.Basil();
  var greeting = document.getElementById("greeting").firstChild.nodeValue; 

  dash.initialize(basil) 
  var gui = new dat.GUI();
  dat.GUI.toggleHide();

  updateClock();
  setInterval('updateClock()', 10000 )

  var themes = gui.add(dash, "theme", ["landscapes", "other", "mine", "chill"])

  switch(greeting) {
    case "Good Night, Pedro":
    break;

    case "Good Morning, Pedro":
    break;

    case "Good Afternoon, Pedro":
    break;

    case "Good Evening, Pedro":
    break;

    case "Sleep Well, Pedro":
    break;
  }

  themes.onChange(function(value) {
    dash.changeMode(value);
  })

  if(basil.keys().indexOf('done-tutorial') == -1) {
    alertify.log("Press H for settings");
  }

  bindKeyStrokes(dash);

  var x = document.getElementById("weather");
  var lat, lon;
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  }

  // getLocation();

  /*
    https://api.aerisapi.com/forecasts/lat,long
    YTkXhLgiZhOeuXUVReNGC
    6sMw2ddx1PjKo76eCLXhWuKDO4IG9inMmWxSYsnD
  */
  
  $.ajax({
    url: "http://api.aerisapi.com/forecasts/los+angeles,ca?client_id=YTkXhLgiZhOeuXUVReNGC&client_secret=6sMw2ddx1PjKo76eCLXhWuKDO4IG9inMmWxSYsnD",
    dataType: "jsonp",
    success: function(json) {
      if (json.success == true) {
        // Set the HTML weather div here.
        console.log(json.response[0]);
        var week = json.response[0].periods;
        // console.log(week[0].weather);
        $("#weather").html(week[0].weather);

        //var ob = json.response.ob;
        //$('#js').html('The current weather in Seattle is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°');
      }
      else {
        alert('An error occurred: ' + json.error.description);
        // Set the HTML weather div to "Unable to gather weather data"
      }
    }
  });
  

  // Clear the URL bar.
  window.history.pushState("string","Title","");

}

