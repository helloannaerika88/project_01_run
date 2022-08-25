class Player {
  constructor() {
    this.width = 80;
    this.height = 97;
    this.x = 280;
    this.y = 600 - this.height;
    this.score = 3;
  }
  draw() {
    // console.log('hello player')

    if (this.y >= 600 - this.height) {
      this.y = 600 - this.height;
    }
    image(game.playerImage, this.x, this.y, this.width, this.height);

    // if ((this.score = 2)) {
    //   text(`💛💛: ${game.player.score}`, 500, 50);
    // } else if ((this.score = 1)) {
    //   text(`💛: ${game.player.score}`, 500, 50);
    // } else {
    //   document.location.href = "tryAgain.html";
    // }

    if (this.y <= 180 - this.height) {
      // console.log('wow!'),
      this.y = 13;
      // console.log('wow!');
      document.location.href = "gameOver.html";
    }
  }
  // jump() {
  //   console.log("jump");
  //   this.velocity = -10;
  // }
  moveUp() {
    console.log("move up");
    this.y -= 15;
  }
  moveDown() {
    this.y += 15;
  }
  moveRight() {
    this.x += 15;
  }
  moveLeft() {
    this.x -= 15;
  }
}
