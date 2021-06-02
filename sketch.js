var blockImage
var block,blocksGroup
var lavaImg
var lava,platform1,platform2;
var boy,boyImg
var finish,finishImg;
var  backgroundImage
var invisibleBlock,invisibleBlockGroup;
var gameState = "play";
function preload(){
  blockImage = loadImage("images/block.png")
  boyImg= loadImage("images/boy1.png")
  lavaImg=loadImage("images/lava2.jpg")
 backgroundImage=loadImage("images/lava1.jpg")
  platformImg=loadImage("images/platform.jpg")
  finishImg=loadImage("images/finish.jpg")

}

function setup() {
  createCanvas(1365,650);
  createEdgeSprites();



  lava=createSprite(900, 700, 300, 40);
  lava.addImage("r1", lavaImg);
  lava.scale=1.25

  platform1=createSprite(150,500,80,150)
  platform1.addImage("r3", platformImg)
  platform1.scale=1.2

  platform2=createSprite(1250,334,100,100)
  platform2.addImage("r45",platformImg)
  platform2.scale=0.5
 

  //finish=createSprite(1200,300,100,100)
  //finish.addImage("r44",finishImg)

  boy = createSprite(70,280,50,50)
  boy.addImage("r4",boyImg)
  boy.scale = 0.5
  boy.debug=false
  boy.setCollider("rectangle",0,90,50,50)
 

  block1=new blocks()
  block1.xPosition=1050
  block1.yPosition=200
  
  block1.scale = 0.3
  boy.depth=block1.depth
  inviBlock1=createSprite(1050,200,50,50);
  inviBlock1.visible=false;


  block2=new blocks()
  block2.xPosition=900
  block2.yPosition=250
  inviBlock2=createSprite(900,250,50,50);
  inviBlock2.visible=false;
  block2.scale = 0.3
  boy.depth=block2.depth

  block3=new blocks()
  block3.xPosition=550
  block3.yPosition=300
  inviBlock3=createSprite(550,300,50,50);
  inviBlock3.visible=false;
  block3.scale = 0.3
  boy.depth=block3.depth

  block4=new blocks()
  block4.xPosition=750
  block4.yPosition=340
  inviBlock4=createSprite(750,340,50,50);
  inviBlock4.visible=false;
  block4.scale = 0.5
  boy.depth=block4.depth
  boy.depth+=1

  
  


}

function draw() {
  background(backgroundImage);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  

  if (gameState === "play") {

    boy.collide(platform1)
    if(keyCode===68){
      boy.x=boy.x+5
    }
    
    if(keyCode===65){
      boy.x=boy.x-5
    }
    
    if(keyCode===32){
      boy.velocityY=-5
    }
    
    boy.velocityY = boy.velocityY + 0.8
    
    
    if(inviBlock1.isTouching(boy)){
      boy.velocityY = 0;
      boy.collide(inviBlock1)
    }
    if(inviBlock2.isTouching(boy)){
      boy.velocityY = 0;
      boy.collide(inviBlock2)
    }
    if(inviBlock3.isTouching(boy)){
      boy.velocityY = 0;
      boy.collide(inviBlock3)
    }
    if(inviBlock4.isTouching(boy)){
      boy.velocityY = 0;
      boy.collide(inviBlock4)
    }
    textSize(50)
    fill("black")
    text("Finish",1190,250)
    
   if( boy.y > 650){
    //screen=createSprite(300,300,2165,2150)  
    //screen.shapeColor="black"
    //boy.destroy();
      //block1.tint=10
 
     gameState = "end"
   }
   
   if(boy.isTouching(platform2)){
     background("black")
     stroke("cyan")
     fill("cyan")
     textSize(30)
     text("Congrats You Win",630,250)
     boy.collide(platform2)
     boy.velocity=0
     //gameState="end";


   }
    
    drawSprites();
  }
  
  if (gameState === "end"){
    background("black")
    //screen=createSprite(300,300,2165,2150)  
   // screen.shapeColor="black"
    stroke("blue");
    fill("blue");
    textSize(30);
    text("Game Over", 625,325)
  }
}



