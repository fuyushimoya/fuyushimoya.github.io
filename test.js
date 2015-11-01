var mouseDistance = new Array();
var timers = new Array();
var combinedresults = new Array();
// Init with both is null.
var lastSeenAt = {
  x: null,
  y: null
};

//THIS FUNCTION CALCULATES THE DISTANCE MOVED
function printMousePos(e) {
  var cursorX = e.clientX;
  var cursorY = e.clientY;

  // Don't calculate when x, y is null, which is the first time.
  // Or you can give lastSeen some other initValue rather than (null, null).
  if (lastSeenAt.x !== null) {
    var math = Math.round(Math.sqrt(Math.pow(lastSeenAt.y - cursorY, 2) +
        Math.pow(lastSeenAt.x - cursorX, 2)));
    mouseDistance.push(math);      
  }

  // Keep the x,y value.
  lastSeenAt.x = cursorX;
  lastSeenAt.y = cursorY;
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
    timers.push(t);
}

function getCombinedResult() {
  // Get the shorter length.
  var length = Math.min(mouseDistance.length, timers.length);

  // Clear previous
  combinedresults = [];
  var i;
  for (i = 0; i < length; ++i) {
    combinedresults.push([timers[i], mouseDistance[i]]);
  } 
}