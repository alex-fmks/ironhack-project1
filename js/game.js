class Game {
  constructor() {
    this.jumper = new Jumper();
  }
  preload() {
    this.jumperImage = loadImage("assets/Dino.gif");
  }
  draw() {
    this.jumper.draw();
  }
}
