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
  fill(r, g, b)
  // noFill();
  noStroke();
  // stroke(255);
  // strokeWeight(5);
  ellipse(x, height / 2, 20, 20)
}