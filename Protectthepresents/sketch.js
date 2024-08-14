var score =0;
var santa,child1,child2, snowball, presents;

var santaImg,childImg, snowballImg, snowmanImg, presentsImg;

var child2Group, child2Group, snowballGroup;


var life =3;
var score=0;
var gameState=1

let lastShotTime = 0;
const cooldown = 1000; // 1 second in milliseconds

function preload(){
  santaImg = loadImage("santa.png")
  snowmanImg = loadImage("snowman.png")
  snowballImg = loadImage("snowball.png")
  child1Img = loadImage("child.png")
  child2Img = loadImage("child2.png")
  presentsImg= loadImage("presents.png")
  bg = loadImage("background.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  presents= createSprite(50, width/2, 100,windowHeight);
  presents.addImage(presentsImg)
  
  santa= createSprite(100, height/2, 50,50);
  santa.addImage(santaImg)
  santa.scale=0.3
  
  snowballGroup = createGroup();   
  child1Group = createGroup();   
  child2Group = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background(bg);
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    santa.y=mouseY  

    if (frameCount % 80 === 0) {
      drawchild1();
    }

    if (frameCount % 100 === 0) {
      drawchild2();
    }

    if(keyDown("space") && canShoot()){
      shootsnowball();
      
    }

    if (child1Group.collide(presents)){
      handleGameover(child1Group);
    }
    
    if (child2Group.collide(presents)) {
      handleGameover(child2Group);
    }
    
    if(child1Group.collide(snowballGroup)){
      handlechildCollision(child1Group);
    }

    if(child2Group.collide(snowballGroup)){
      handlechildCollision(child2Group);
    }

    drawSprites();
  }
    
  
}

function drawchild1(){
  child1 = createSprite(800,random(20,780),40,40);
  child1.addImage(child1Img);
  child1.scale = 0.3;
  child1.velocityX = -8;
  child1.lifetime = 400;
  child1Group.add(child1);
}
function drawchild2(){
  child2 = createSprite(800,random(20,780),40,40);
  child2.addImage(child2Img);
  child2.scale = 0.3;
  child2.velocityX = -8;
  child2.lifetime = 400;
  child2Group.add(child2);
}

function shootsnowball(){
  snowball= createSprite(150, width/2, 50,20)
  snowball.y= santa.y-20
  snowball.addImage(snowballImg)
  snowball.scale=0.15
  snowball.velocityX= 20
  snowballGroup.add(snowball)
}

function canShoot() {
  const currentTime = Date.now();
  if (currentTime - lastShotTime >= cooldown) {
      lastShotTime = currentTime;
      return true;
  }
  return false;
}

function handlechildCollision(childGroup){
    if (life > 0) {
       score=score+1;
    }

    snowman= createSprite(snowball.x+60, snowball.y, 50,50);
    snowman.addImage(snowmanImg) 
    
    snowman.scale=0.3
    snowman.life=20
    snowballGroup.destroyEach()
    childGroup.destroyEach()
}

function handleGameover(childGroup){
  
    life=life-1;
    childGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
      swal({
        title: `Game Over`,
        text: "Oops you lost the game....!!!",
        text: "Your Score is " + score,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
    }
  
}