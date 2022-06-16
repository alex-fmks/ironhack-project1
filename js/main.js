let platform = [];
let platformNumber = 100;
let platformGap = 50;
let dino;
let r = 0;

function Doodle() {
  this.x = 10;
  this.y = 10;
}

function Platform() {
  this.x = 10;
  this.y = 10;
  this.height = 10;
}

let dinoGif;
function preload() {
  dinoGif = loadImage("assets/Dino.gif");
}

function setup() {
  createCanvas(800, 500);

  //creat platforms
  for (let i = 0; i < platformNumber; i++) {
    platform[i] = new Platform();
    platform[i].x = random(0, 700);
    platform[i].y = 500 + i * platformGap;
  }

  //set the starting status of the dino and platform
  platform[0].x = 0;
  dino = new Doodle();
  dino.x = platform[0].x + 50;
  dino.y = platform[0].y - 5;
}

function draw() {
  background(75, 0, 130);
  drawPlatform();
  drawDoodle();

  //make the dino move with mouse and stay on the platform/ drop
  dino.x = mouseX;
  if (mouseX < platform[r].x || mouseX > platform[r].x + 100) {
    dino.y = dino.y + 2;

    if (dino.y > platform[r].y + 10) {
      r++;
    }
  } else {
    dino.y = platform[r].y - 5;
  }
}

function drawPlatform() {
  for (let i = 0; i < platformNumber; i++) {
    rect(platform[i].x, platform[i].y, 100, platform[i].height, 10);
    platform[i].y =
      500 + i * platformGap - ((frameCount / 0.7) % (500 + i * platformGap));

    //score
    textSize(20);
    fill(255, 136, 0);
    textFont("Verdana");
    text("SCORE:", 625, 30);
    let score = parseInt(frameCount / 42) + 1;
    text(score, 715, 30);
  }
}

function drawDoodle() {
  push();
  translate(dino.x, dino.y);
  image(dinoGif, 0, 0, 50, 50);
  pop();

  //Game over
  if (dino.y < 0 || dino.y > 500) {
    textFont("Verdana");
    fill(155);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", 400, 250);
    noLoop();
    noFill();
    noStroke();
  }
}
