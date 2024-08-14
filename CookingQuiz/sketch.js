var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("CookQuiz.jpg");
  bg2 = loadImage("PoshFood.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 200);
  system = new System();
  security = new Security();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 550, 30);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(30);
    text("Congratulations, You're a proffesional chef",500, 300);
  }

  drawSprites()
}