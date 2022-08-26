class Obstacle {
  constructor(image, x, y, speed) {
    this.image = image;
    // this.x = width;
    // this.y = (Math.random() * height) / 2.5;
    this.width = 80;
    this.height = 80;
    this.x1 = x;
    this.y1 = y;
    this.speed = speed;
    // this.x2 = 700
    // this.y2 = 200
    // this.x3 = -10
    // this.y3 = 300
    // this.x4 = 600
    // this.y4 = 400
  }

  draw() {
    // console.log("hello there")
    // this.x--
    // image(this.image, this.x, this.y, this.width, this.height)
    let dome1 = image(
      game.domeImages[0].src,
      this.x1,
      this.y1,
      width / 6,
      height / 6
    );
    this.x1 = this.x1 + this.speed;
    // if(this.x1 > 550) {
    //     this.x1 = 0;
    // }
    // let dome2 = image(game.domeImages[1].src, this.x2, this.y2, width/6, height/6)
    // this.x2 = this.x2 - 3;
    // let dome3 = image(game.domeImages[2].src, this.x3, this.y3, width/6, height/6)
    // this.x3 = this.x3 + 2;
    // let dome4 = image(game.domeImages[3].src, this.x4, this.y4, width/6, height/6)
    // this.x4 = this.x4 - 2;
  }

  collision(playerInfo) {
    // console.log('collision', playerInfo)
    // dist(x, y, 2ndx, 2ndy) returns the distance
    // get the middle of the obstacle
    // let obstacleX = this.x + this.width / 2
    // let obstacleY = this.y + this.height / 2
    // // get the middle of the player
    // let playerX = playerInfo.x + playerInfo.width / 2
    // let playerY = playerInfo.y + playerInfo.height / 2
    // if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
    // 	return false
    // } else {
    // 	// increment the score
    // 	game.player.score++
    // 	console.log(game.player.score)
    // 	return true
    // }

    // some adjustments needs to be made because the images has a 'shadow'
    let obstacleX = this.x1 + 50 + this.width / 6 / 2;
    let obstacleY = this.y1 + this.height / 6 / 2;
    let playerX = playerInfo.x + playerInfo.width / 3;
    let playerY = playerInfo.y + playerInfo.height / 2.7;
    if (dist(obstacleX, obstacleY, playerX, playerY) > 40) {
      // console.log(dist(obstacleX, obstacleY, playerX, playerY))
      return false;
    } else {
      // decrement the score from the initial score of 100
      game.player.score--;
      console.log(game.player.score);
      if (!game.song.isPlaying()) game.song.play();
      return true;
    }
  }
}
