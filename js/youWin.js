let imgWin;

function preload(){
 imgWin = loadImage('./assets/background/you_win.png'); 
  
}

function setup() {
  createCanvas(854, 480, WEBGL);
  // angleMode(DEGREES);
}

function draw() {
    noStroke();
  background(0);
  
  rotateX(frameCount *0.01);
  rotateY(frameCount * 0.02);
  
  push();
  translate(0,0,100);
 	texture(imgWin);
  plane(200,200);
  pop();
  
  push();
 	texture(imgWin);
  
  translate(0,100, 0);
  rotateX(HALF_PI);
  plane(200,200);
  pop();
  
  push();
 	texture(imgWin);
  
  translate(100,0, 0);
  rotateY(HALF_PI);
  plane(200,200);
  pop();
  

}