var bindKeyStrokes = function(dash) {
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
}