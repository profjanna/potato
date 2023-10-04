let potato;

function preload(){
  potato = loadImage("potato1.jpeg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(potato,0,0);
}
