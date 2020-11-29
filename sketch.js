var gameState=PLAY;
var PLAY;
var END;
var monkey , monkey_running,monkeyF;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;
var gameOver,gameOverImage;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyF= loadImage("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}



function setup() {
  createCanvas(600,400);
 monkey = createSprite(100,285,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  monkey.velocityY=3;
  ground = createSprite(300,320,1200,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
 
  FoodGroup=new Group();
  obstaclesGroup = new Group();
}


function draw() {
background(157,207,250);
  text("Survival Time: "+ score, 300,50);
 for (var x = 0; x < obstaclesGroup.length; x++) {
    
      if(obstaclesGroup.get(x).isTouching(monkey)){
      obstaclesGroup.setVelocityXEach(0);
         obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setVelocityXEach(0);
      
    }
    }
  if(gameState === PLAY){
   if(keyDown("space")&& monkey.y >= 280){
      monkey.velocityY=-20;
    }
  for (var i = 0; i < FoodGroup.length; i++) {
    
      if(FoodGroup.get(i).isTouching(monkey)){
      FoodGroup.get(i).remove()
      score =score+1;
    }
    }
  } 
   
else if(gameState === END){
    
  }
  if (ground.x < 5){
      ground.x = ground.width/2;
    }
    
    
    
  monkey.velocityY = monkey.velocityY +1;
  monkey.collide(ground);
  obstacle();
  food();
 drawSprites();
}
function obstacle () {
  if (frameCount % 150 === 0){
   var obstacle = createSprite(600,290,10,40);
   obstacle.velocityX = -7
   obstacle.addImage("obstacle",obstacleImage);     
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
}
}
function food(){
  if (frameCount % 150 === 0){
   var food = createSprite(600,200,10,10);
    food.velocityX=-4;
    food.addImage("banana",bananaImage);
    food.scale=0.1;
     food.y = Math.round(random(150,180));
    FoodGroup.add(food);
  }
}



