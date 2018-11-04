// Mikian Musser
// https://p5js.org/reference/

var x = 0;
var y = 0;
var r = 100;
var g = 255;
var b = 100;

function setup() {
  var h = $('#showcaseContainer').height();
  var w = $('#showcaseContainer').width();
  var sketchCanvas = createCanvas(w, h);
  sketchCanvas.parent("showcaseContainer");
}

function draw() {
  background(151);
  x = mouseX;
  y = mouseY;
  fill(r, g, b)
  // noFill();
  noStroke();
  // stroke(255);
  // strokeWeight(5);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  ellipse(x, y, 20, 20)
}