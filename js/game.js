class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.backgroundImages;
    this.playerImage;
    this.obstacles = [];
    this.domeImage;
    this.domeImages;
    this.song;
  }
  preload() {
    // this.backgroundImages = [
    //     { src: loadImage('/assets/background/desktop_bg.png'), x:0, speed: 0}
    // ]
    this.playerImage = loadImage("./assets/player/Coco.png");
    this.domeImages = [
      {
        src: loadImage("./assets/coins/Kuku_dome 1.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("./assets/coins/Kuku_dome 1.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("./assets/coins/Kuku_dome 1.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("./assets/coins/Kuku_dome 1.png"),
        x: 0,
        speed: 4,
      },
    ];
    this.domeImage = loadImage("./assets/coins/Kuku_dome 1.png");
    this.song = loadSound("../assets/audio/Child Saying Ouch.mp3");
  }
  draw() {
    clear();
    background("#14008D");
    this.player.draw();
    // this.obstacle.draw()
    // every x frames we want to push a new coin into the array
    // console.log(frameCount)
    if (frameCount % 120 === 0) {
      this.obstacles.push(new Obstacle(this.domeImage, 0, 100, 3)),
        this.obstacles.push(new Obstacle(this.domeImage, 700, 200, -3)),
        this.obstacles.push(new Obstacle(this.domeImage, -10, 300, 2)),
        this.obstacles.push(new Obstacle(this.domeImage, 600, 400, -2));
    }

    // console.log(this.obstacles)

    this.obstacles.forEach(function (obstacle) {
      obstacle.draw();
    });
    this.obstacles = this.obstacles.filter((obstacle) => {
      // console.log(this)
      if (obstacle.collision(this.player) || obstacle.x < 0) {
        return false;
      } else {
        return true;
      }
    });
  }
}
