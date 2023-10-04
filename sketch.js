let mic;

function setup() {
  createCanvas(900, 900);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  micLevel = 1000*(mic.getLevel());
  textSize(micLevel);
  //text('move your mouse',20,200);
  fill(micLevel,0,micLevel,90);
  text('ha',200,200);
  if(mouseX>200&&mouseY>200 ){
      
      if (mouseX<300 && mouseY<300)          {
    background(255);    
    textSize(200);
    text('hi',200,200);
          }
     }
console.log(micLevel);
}

function mouseClicked(){
  
}