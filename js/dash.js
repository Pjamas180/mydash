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

  var modes = {"sleepwell": 
    ["Sleep.jpg"],
     "goodmorning": 
    ["Morning.jpg"],
    "goodafternoon":
    ["Afternoon1.jpg"],
    "goodevening":
    ["Evening1.png",
    "Evening.png"], 
    "goodnight":
    ["Night.jpg"]
  }
  
  this.curMode = "goodmorning";
  this.curIndex = 0;

  // controllable via Dat.GUI
  this.showClock = true;
  this.showGreeter = true;
  this.name = "pvillaro";
  this.theme = "goodmorning"

  var currentTime = new Date();
  
  var currentHours = currentTime.getHours ();

    if((3 <= currentHours) && (currentHours < 6)) {
      this.curMode = "sleepwell"
    }
    if((6 <= currentHours) && (currentHours < 12)) {
      this.curMode = "goodmorning"
    }
    if((12 <= currentHours) && (currentHours < 18)) {
      this.curMode = "goodafternoon"
    }
    if((18 <= currentHours) && (currentHours < 22)) {
      this.curMode = "goodevening" 
    }
    if(((22 <= currentHours) && (currentHours < 24)) || ((0 <= currentHours) && (currentHours <= 2))) {
      this.curMode = "goodnight"
    }
    console.log(this.curMode);

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
    /*if(keys.indexOf("mode2") != -1) {
      this.curMode = basil.get("mode2");
      console.log("loaded mode from saved settings")
    }*/

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