let platform = [];
let platformNumber = 50;
let platformGap = 50;
let dino;
let r = 0;

function Dino() {
  this.x = 20;
  this.y = 20;
}

function Platform() {
  this.x = 10;
  this.y = 10;
  this.height = 10;
}

function setup() {
  createCanvas(800, 500);
  //gifImage = loadImage("assets/Dino.gif");
  angleMode(DEGREES);

  //creat platforms
  for (let i = 0; i < platformNumber; i++) {
    platform[i] = new Platform();
    platform[i].x = random(0, 700);
    platform[i].y = 500 + i * platformGap;
  }

  //set the starting status of the dino and platform
  platform[0].x = 0;
  dino = new Dino();
  dino.x = platform[0].x + 50;
  dino.y = platform[0].y - 5;
}

function draw() {
  background(75, 0, 130);
  drawPlatform();
  drawDino();

  //make the dino move with mouse and stay on the platform/ drop
  dino.x = mouseX;
  if (mouseX < platform[r].x || mouseX > platform[r].x + 100) {
    dino.y = dino.y + 5;

    if (dino.y > platform[r].y + 10) {
      r++;
    }
  } else {
    dino.y = platform[r].y - 5;
  }
}

function drawPlatform() {
  fill(255, 136, 0);
  for (let i = 0; i < platformNumber; i++) {
    rect(platform[i].x, platform[i].y, 100, platform[i].height, 10);
    platform[i].y =
      500 + i * platformGap - ((frameCount / 0.7) % (500 + i * platformGap));

    //score
    textSize(20);
    textFont("Verdana");
    text("SCORE:", 625, 30);
    let score = parseInt(frameCount / 40) + 1;
    text(score, 715, 30);
  }
}

function drawDino() {
  /*gifImage.resize(60, 70);
  image(gifImage, 0, 0);
  */
  translate(dino.x, dino.y);
  push();
  //dino head
  strokeWeight(1);
  //noStroke();
  point(19, -9);
  point(13, -34);
  point(-11, -34);
  point(-17, -9);
  //strokeWeight(1);

  //fill(204, 245, 7);
  beginShape();
  curveVertex(19, -9);
  curveVertex(19, -9);
  curveVertex(13, -34);
  curveVertex(-11, -34);
  curveVertex(-17, -9);
  curveVertex(-17, -9);
  endShape();
  fill(204, 245, 7, 100);
  //noStroke();
  ellipse(6, -24, 1, 1);
  ellipse(12, -24, 1, 1);
  line(18, -24, 25, -25);
  line(19, -18, 25, -17);
  line(25, -25, 25, -17);
  ellipse(25, -21, 3, 7);
  noFill();

  //dino body
  strokeWeight(1);
  fill(20, 155, 20);
  rect(-17, -9, 36, 4);
  rect(-17, -5, 36, 4);

  //dino feet
  fill(0);
  line(-12, 0, -12, 6);
  line(-12, 6, -8, 6);
  line(-4, 0, -4, 6);
  line(-4, 6, 0, 6);
  line(4, 0, 4, 6);
  line(4, 6, 8, 6);
  line(12, 0, 12, 6);
  line(12, 6, 16, 6);

  pop();
  //Game over
  if (dino.y < 0 || dino.y > 500) {
    stroke(139, 0, 0);
    //textFont("Walt Disney Script");
    textFont("Verdana");
    fill(139, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", 400, 250);
    noLoop();
    noFill();
    noStroke();
  }
}
