var monkey,stone,banana,monkeyImg,stoneImg,bananaImg;
var jungleImg,bg;
var ground;
var bananaImg,rockImg;
var foodGroup,obstacleGroup;
var score=0;

function preload (){
  monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  jungleImg=loadImage("jungle.jpg");
  bananaImg=loadImage("banana.png");
  rockImg=loadImage("stone.png")
}

function setup() {
  createCanvas(800, 400);
  
 
 bg=createSprite (0,0,800,400);
  bg.addImage(jungleImg);
  bg.velocityX=-4;
  bg.scale=1.5;
  ground = createSprite(400,350,800,10);
 ground.visible=false;
  ground.velocityX=-4;
   monkey = createSprite(50,165,20,50);
  monkey.addAnimation("monkey",monkeyImg);
  monkey.scale=0.1;
  foodGroup=new Group();
  obstaclesGroup=new Group();
}

function draw() {
  background(255);
  if (bg.x<0){
      bg.x=bg.width/2;
      }
  
  if(ground.x<0){
     ground.x=ground.width/2;
     }

  if (keyDown("space")){
      monkey.velocityY=-10;
    
      }
  monkey.velocityY=monkey.velocityY+0.8;
   monkey.collide(ground);
 
  
  if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach();
    score=score+2;
    
     }
  switch(score){
    case 10:monkey.scale=0.12  
      break
      case 20: monkey.scale=0.14
      break 
      case 30: monkey.scale= 0.16
  break
  case 40: monkey.scale= 0.18
      break
      default:break;
  }
  
  if  (monkey.isTouching(obstaclesGroup)){
       monkey.scale=0.08;
       }
    spawnFood();
  spawnObstacles();
  drawSprites();
  stroke("white")
  textSize(20)
  fill("white")
  text("score"+score,500,50)
}
function spawnFood(){
  if(frameCount%80==0){
    var banana=createSprite(600,250,40,10)
    banana.Y=random(120,200)
    banana.addImage(bananaImg);
    banana.scale=0.05;
    banana.velocityX=-5;
    foodGroup.add(banana);
}
}
function spawnObstacles(){
  if(frameCount%300==0){
    var rock=createSprite(800,350,10,40)
    rock.velocityX=-6;
    rock.addImage(rockImg);
    rock.scale=0.2;
    obstaclesGroup.add(rock);
    
    
}
}