var survivalTime = 0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)

monkey = createSprite(80,315,20,50);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1 
  
ground = createSprite(400,350,900,10)
// ground.velocityX = -4
ground.x = ground.width/2
console.log(ground.x)
}


function draw() {
background("lightblue")
  
  //jump when the space key is pressed
    if(keyWentDown("space")&& monkey.y >= 151) {
      monkey.velocityY = -12;
    }
  
  drawSprites() 

  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50)

  obstacles()
  bananas()
}

function bananas(){
 if (frameCount % 80 === 0){
   var banana = createSprite(600,200,10,40);
  banana.addImage(bananaImage)
  banana.velocityX = -4
  banana.scale = 0.1;
  banana.lifetime = 300;
 }
}
function obstacles(){
 if (frameCount % 300 === 0){
  var rock = createSprite(600,305,10,40);
  rock.addImage(obstacleImage)
  rock.velocityX = -4
  rock.scale = 0.24;
  rock.lifetime = 300;
 }
}
