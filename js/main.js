const game = new Game();
let song;
let font,
  fontsize = 18;


function preload() {
  game.preload();
 song = loadSound("../assets/audio/Child Saying Ouch.mp3");
}

function setup() {
  createCanvas(600, 600);
  // score = createP('Score:').position(500,100, 'fixed').style
  // ('font-size: 18px; color: white');
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  // let song = loadSound('./assets/audio/Child Saying Ouch.mp3')
}

function draw() {
  game.draw();
  textFont("akagi-pro");
  // textFont("Raleway");
  textAlign(CENTER);
  drawWords(width * 0.75);
  // score.html('Score: ' + game.player.score);
}

function drawWords(x) {
  fill(255);
  // text(`💛💛💛: ${game.player.score}`, 500, 50);
  if (game.player.score === 3){
    text(`💛💛💛 ${game.player.score}`, 500, 50);
  } else if ((game.player.score === 2)) {
    text(`💛💛 ${game.player.score}`, 500, 50);
    if (!song.isPlaying()) song.play();
  } else if ((game.player.score === 1)) {
    text(`💛 ${game.player.score}`, 500, 50);
    if (!song.isPlaying()) song.play();
  } else if (game.player.score === 0) {
    document.location.href = "tryAgain.html";
  }
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }

  // arrow up / "w"
  if (keyCode === 38) {
    game.player.moveUp();
  }

  if (keyCode === 87) {
    game.player.moveUp();
  }

  // arrow down / "s"
  if (keyCode === 40) {
    game.player.moveDown();
  }

  if (keyCode === 83) {
    game.player.moveDown();
  }

  // arrow right / "d"
  if (keyCode === 68) {
    game.player.moveRight();
  }

  if (keyCode === 39) {
    game.player.moveRight();
  }

  // arrow left / "a"
  if (keyCode === 37) {
    game.player.moveLeft();
  }

  if (keyCode === 65) {
    game.player.moveLeft();
  }
}
