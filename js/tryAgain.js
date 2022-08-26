// let kuku;
// function preload() {
//   kuku = loadFont('/assets/fonts/Kuku-Regular.otf');
// }

// function setup() {
//   createCanvas(1280, 720, WEBGL);
//   textFont(kuku);
//   textSize(width / 13);
//   textAlign(CENTER, CENTER);
// }
// function draw() {
//   background(0);
//   let time = millis();
//   rotateX(time / 1000);
//   rotateZ(time / 1234);
//   text(`try again..`, 0, 0);
// }

let img;

function preload(){
 img = loadImage('../assets/background/try_again.png'); 
  
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
 	texture(img);
  plane(200,200);
  pop();
  
  push();
 	texture(img);
  
  translate(0,100, 0);
  rotateX(HALF_PI);
  plane(200,200);
  pop();
  
  push();
 	texture(img);
  
  translate(100,0, 0);
  rotateY(HALF_PI);
  plane(200,200);
  pop();
  

}