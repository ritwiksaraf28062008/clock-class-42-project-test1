var hour;
var min;
var sec;
//var scAngle;


function setup() {
  createCanvas(800,400);
  hour = hour();
  min = minute();
  sec = second();
}

function draw() {
  background(255,255,255); 
  angleMode(DEGREES); 
  scAngle = map(sec , 0 , 0 , 0 , 360);
  minAngle = map(min , 0 , 0 , 0 , 360);
  hourAngle = map(hour , 0 , 0 , 0 , 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line( 0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(255,0,0);
  strokeWeight(7);
  fill("blue");
  line( 500,0,100,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(255,0,0);
  strokeWeight(7);
  fill("green");
  line( 0,43,100,0);
  pop();

  drawSprites();
}