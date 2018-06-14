var updateClock = function() {
    var currentTime = new Date();
  
    var currentHours = currentTime.getHours ( );
    
    var greeting = ""
    if((3 <= currentHours) && (currentHours < 6)) {
      greeting = "Sleep Well, Randy"
    }
    if((6 <= currentHours) && (currentHours < 12)) {
      greeting = "Good Morning, Randy"
    }
    if((12 <= currentHours) && (currentHours < 18)) {
      greeting = "Good Afternoon, Randy"
    }
    if((18 <= currentHours) && (currentHours < 22)) {
      greeting = "Good Evening, Randy"
    }
    if(((22 <= currentHours) && (currentHours < 24)) || ((0 <= currentHours) && (currentHours <= 2))) {
      greeting = "Good Night, Randy"
    }
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
  
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  
    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
  
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;

    document.getElementById("greeting").firstChild.nodeValue = greeting 
}