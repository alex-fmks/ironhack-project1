class Game {}

function setup() {
  createCanvas(750, 750);
  x2 = width;
}

function resizeImg() {
  spaceImg.resize(750, 750);
  obstacle.resize(80, 80);
}

function draw() {
  resizeImg();
  image(spaceImg, 0, 0);
  image(obstacle, 40, 40);
}

let bgImg;
let x1 = 0;
let x2;

let scrollSpeed = 2;

function preload() {
  bgImg = loadImage("assets/Space.png");
}

function draw() {
  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width) {
    x1 = width;
  }
  if (x2 < -width) {
    x2 = width;
  }
}
