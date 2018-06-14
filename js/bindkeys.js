var bindKeyStrokes = function(dash) {
  /* Binding key strokes */
  Mousetrap.bind("up", function() {
    if (dash.curMode == "sleepwell") {
      dash.changeMode("goodmorning");
    } else if (dash.curMode == "goodmorning") {
      dash.changeMode("goodafternoon");
    } else if (dash.curMode == "goodafternoon") {
      dash.changeMode("goodevening");
    } else if (dash.curMode == "goodevening") {
      dash.changeMode("goodnight");
    } else if (dash.curMode == "goodnight") {
      dash.changeMode("sleepwell");
    }
  });
  Mousetrap.bind("right", function() {
    dash.nextBackground()});
  Mousetrap.bind("left", function() {
    dash.previousBackground()});
  Mousetrap.bind("g", function() {
    window.open("https://www.gmail.com");
  });
  Mousetrap.bind("r", function() {
    window.open("https://www.reddit.com");
  });
  Mousetrap.bind("f", function() {
    window.open("https://www.facebook.com");
  });
  Mousetrap.bind("y", function() {
    window.open("https://www.youtube.com");
  });
  Mousetrap.bind("m", function() {
    window.open("https://www.amazon.com");
  });
  Mousetrap.bind("s", function() {
    window.open("https://www.schoolsfirstfcu.org/");
  });
  Mousetrap.bind("w", function() {
    window.open("https://www.wikipedia.com");
  });
  Mousetrap.bind("b", function() {
    window.open("https://www.bing.com");
  });
  Mousetrap.bind("t", function() {
    window.open("https://www.twitter.com");
  });
  Mousetrap.bind("d", function() {
    window.open("https://www.dropbox.com");
  });
  Mousetrap.bind("e", function() {
    window.open("https://www.ebay.com");
  });
  Mousetrap.bind("a", function() {
    window.open("https://acs-webmail.ucsd.edu/squirrelmail/src/login.php");
  });
  Mousetrap.bind("o", function() {
    window.open("https://www.google.com");
  });
  Mousetrap.bind("p", function() {
    window.open("https://www.piazza.com");
  });
  Mousetrap.bind("l", function() {
    window.open("https://www.linkedin.com");
  });
  Mousetrap.bind("c", function() {
    window.open("https://leetcode.com");
  });
}