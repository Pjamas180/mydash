var Dash = function() {

  var credits = {
    "mockup.gif":"http://bitslap.se/",
    "bitslap.gif":"http://bitslap.se/",
    "asylumgate.gif":"http://bitslap.se/",
    "nightcycle.gif":"http://bitslap.se/",
    "fireflyreboot.gif":"http://bitslap.se/",
    "town.png":"http://www.serebiiforums.com/showthread.php?379701-Another-Sprite-Showcase",
    "ironberg.png":"http://www.serebiiforums.com/showthread.php?379701-Another-Sprite-Showcase",
    "forrest.png":"http://www.serebiiforums.com/showthread.php?379701-Another-Sprite-Showcase",
    "leonard.png":"http://opengameart.org/content/whispers-of-avalon-grassland-tileset",
    "arkanos.png":"http://opengameart.org/content/mage-city-arcanos",
    "dungeon.gif":"http://opengameart.org/content/a-blocky-dungeon",
    "bridge.gif":"Mark Ferrari",
    "falls.gif":"Mark Ferrari",
    "coast.gif":"Mark Ferrari",
    "dawn.gif":"Mark Ferrari",
    "northlights.gif":"Mark Ferrari",
    "lake.gif":"Mark Ferrari",
    "snow.gif":"Mark Ferrari",
    "bridge_raining.gif":"Mark Ferrari",
    "nature.gif": "Mark Ferrari",
    "castle.gif": "Mark Ferrari",
    "grandcanyon.gif": "Mark Ferrari",
    "sea.gif": "Mark Ferrari",
    "cyber.gif": "http://flexroman.tumblr.com/"
  }

  var modes = {"landscapes": 
    ["bridge.gif",
     "coast.gif",
     "dawn.gif", 
     "grandcanyon.gif",
     "northlights.gif",
     "lake.gif",
     "falls.gif", 
     "castle.gif",
     "bridge_raining.gif",
     "snow.gif", 
     "nature.gif",
     "sea.gif",
     "temple.gif",
     "forrest.gif",
     "waterfall.gif"],
     "other": 
    ["nightcycle.gif", 
    "fireflyreboot.gif", 
    "mockup.gif", 
    "asylumgate.gif", 
    "bitslap.gif",
    "town.png", 
    "ironberg.png", 
    "forrest.png", 
    "leonard.png", 
    "dungeon.gif"],
    "mine":
    ["fire.gif"],
    "chill":
    ["cherryblossom.gif",
    "lakeautmn.gif",
    "shop.gif",
    "sleepy.gif"]
  }
  
  this.curMode = "landscapes";
  this.curIndex = 0;

  // controllable via Dat.GUI
  this.showClock = true;
  this.showGreeter = true;
  this.name = "pvillaro";
  this.theme = "landscapes"

  this.changeBackground = function(background) {
    console.log("Changing to " + background);
    var rule = document.styleSheets[0].cssRules[0];
    var postfix = "no-repeat center center fixed";
    var s = "url(images/" + background + ") " + postfix;
    rule.style.background = s 
    rule.style.backgroundSize = "cover"
  }

  this.changeCredit = function(name) {
    console.log("Changing credit to " + name);
    var s = name;
    document.getElementById("footer").firstChild.nodeValue = s; 
  }

  this.updateBackground = function() {
    var file = modes[this.curMode][this.curIndex]
    var folder = this.curMode + "/"
    this.changeBackground(folder + file);
    if(file in credits) {
      this.changeCredit(credits[file]);
    } else {
      this.changeCredit("")
    }
  } 

  this.nextBackground = function() {
    this.curIndex += 1;
    if(this.curIndex + 1 > modes[this.curMode].length) {
      this.curIndex = 0;
    }
    this.updateBackground();
  }

  this.previousBackground = function() {
    this.curIndex -= 1; 
    if(this.curIndex < 0) {
      this.curIndex = modes[this.curMode].length - 1;
    }
    this.updateBackground();
  }

  this.initialize = function(basil) {
    // read the configuration
    this.basil = basil;
    
    var keys = basil.keys()
    if(keys.indexOf("mode2") != -1) {
      this.curMode = basil.get("mode2");
      console.log("loaded mode from saved settings")
    }

    // random background
    var x = Math.random() * modes[this.curMode].length;
    this.curIndex = Math.floor(x);

    this.updateBackground();
    alertify.log("Press Left or Right to change background.");
    alertify.log("Press Up to change mode.");

  }

  this.changeMode = function(mode) {
    console.log(mode);
    this.curMode = mode;
    this.curIndex = 0;
    this.updateBackground();

    this.basil.set("mode2", mode);
    this.basil.set("done-tutorial", true);
    alertify.log("Saved settings")
  } 
}

var updateClock = function() {
    var currentTime = new Date();
  
    var currentHours = currentTime.getHours ( );
    
    var greeting = ""
    if((3 <= currentHours) && (currentHours < 6)) {
      greeting = "Sleep Well, Pedro"
    }
    if((6 <= currentHours) && (currentHours < 12)) {
      greeting = "Good Morning, Pedro"
    }
    if((12 <= currentHours) && (currentHours < 18)) {
      greeting = "Good Afternoon, Pedro"
    }
    if((18 <= currentHours) && (currentHours < 22)) {
      greeting = "Good Evening, Pedro"
    }
    if(((22 <= currentHours) && (currentHours < 24)) || ((0 <= currentHours) && (2 <= currentHours))) {
      greeting = "Good Night, Pedro"
    }
    
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
  
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  
    var timeOfDay = ( currentHours < 12 ) ? "am" : "pm";
  
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  
    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
  
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;

    document.getElementById("greeting").firstChild.nodeValue = greeting 
  }

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
    dash.changeMode
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

  /* Binding key strokes */
  Mousetrap.bind("up", function() {
    if (dash.curMode == "other") {
      dash.changeMode("landscapes");
    } else if (dash.curMode == "landscapes") {
      dash.changeMode("mine");
    } else if (dash.curMode == "mine") {
      dash.changeMode("chill");
    } else if (dash.curMode == "chill") {
      dash.changeMode("other");
    }
  });
  Mousetrap.bind("right", function() {
    dash.nextBackground()});
  Mousetrap.bind("left", function() {
    dash.previousBackground()});
  Mousetrap.bind("g", function() {
    window.location.href = "https://www.gmail.com"
  });
  Mousetrap.bind("r", function() {
    window.location.href = "https://www.reddit.com"
  });
  Mousetrap.bind("f", function() {
    window.location.href = "https://www.facebook.com"
  });
  Mousetrap.bind("y", function() {
    window.location.href = "https://www.youtube.com"
  });
  Mousetrap.bind("m", function() {
    window.location.href = "https://www.amazon.com"
  });
  Mousetrap.bind("s", function() {
    window.location.href = "https://www.schoolsfirstfcu.org/"
  });
  Mousetrap.bind("w", function() {
    window.location.href = "https://www.wikipedia.com"
  });
  Mousetrap.bind("b", function() {
    window.location.href = "https://www.bing.com"
  });
  Mousetrap.bind("t", function() {
    window.location.href = "https://www.twitter.com"
  });
  Mousetrap.bind("d", function() {
    window.location.href = "https://www.dropbox.com"
  });
  Mousetrap.bind("e", function() {
    window.location.href = "https://www.ebay.com"
  });
  Mousetrap.bind("a", function() {
    window.location.href = "https://acs-webmail.ucsd.edu/squirrelmail/src/login.php"
  });
  Mousetrap.bind("o", function() {
    window.location.href = "https://www.google.com"
  });
  Mousetrap.bind("p", function() {
    window.location.href = "https://www.piazza.com"
  });
  Mousetrap.bind("l", function() {
    window.location.href = "https://www.linkedin.com"
  });
  Mousetrap.bind("c", function() {
    window.location.href = "https://leetcode.com"
  });

  // Clear the URL bar.
  window.history.pushState("string","Title","");

}

