class Jumper {
  constructor() {
    this.velocity = 0;
    this.gravity = 0.2;
    this.width = 100;
    this.height = 140;
    this.x = 0;
    this.y = 600 - this.height;
  }
  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    // this prevents the player from moving down throught the bottom of the screen
    if (this.y >= height - this.height) {
      // reset him to the starting position
      this.y = height - this.height;
    }
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }
  jump() {
    console.log("jump");
    // this.y -= 30
    this.velocity = -15;
  }
}
