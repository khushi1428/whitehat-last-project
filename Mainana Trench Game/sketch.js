var bg ,formbgimg ;
var form;
var form2;
var gameState="form";
var button,buttonImg;
var rulesbgimg;
var Space, spaceImg;
var Submarine,subImg;
var PLAYbg,PLAYbgImg;
var corner,cornerImg;
var reset, resetImage;
var obstacle,ob1,ob2,ob3,ob4,ob5,ob6,obstacleGroup,ob7;
var score;


function preload(){
formbgimg=loadAnimation("images/background.png","images/bg 2.png","images/background.png")
buttonImg=loadImage("images/start.jpeg");
rulesbgimg=loadImage("images/light bg.png");
spaceImg=loadImage("images/space.png");
subImg=loadImage("images/ship3.png");
cornerImg=loadImage("images/61.png");
//ob1=loadImage("images/fish1.png");
ob2=loadImage("images/fish2.png");
ob4=loadImage("images/fish4.png");
ob3=loadImage("images/fish3.png");
ob5=loadImage("images/seahorse1.png");
ob6=loadImage("images/shark.png");
ob7=loadImage("images/octopus.png")
PLAYbgImg=loadImage("images/bg4.png");
resetImage=loadImage("images/resetimg.png")

}

function setup(){
    createCanvas(windowWidth,windowHeight)
    bg=createSprite(windowWidth/2,windowHeight/2,30,30);
    
     PLAYbg=createSprite(windowWidth/2,windowHeight/2);
     PLAYbg.addImage(PLAYbgImg);
     PLAYbg.visible=false;
     //reset.visible=false;

    Submarine=createSprite(windowWidth/2,windowHeight/2)
    Submarine.addImage(subImg);
    Submarine.visible=false;
    Submarine.scale=0.2;
    Submarine.setCollider("rectangle",0,0,Submarine.width,Submarine.height)
    Submarine.debug=true;

    Space=createSprite(windowWidth/2+280,630);
    Space.addImage(spaceImg);
    Space.scale=0.2;
    Space.visible=false;
    
    button=createSprite(windowWidth/2+50,240);
    button.addImage(buttonImg);

     corner=createSprite(windowWidth/2+50,240)
     corner.addImage(cornerImg);
     corner.visible=false;
     corner.scale=0.5;
    
     reset=createSprite(windowWidth/2+100,windowHeight/2+100);
     reset.addImage(resetImage);
     reset.visible=false;
     

    button.scale=0.4;
    form=new Form();
    form.display();
    

    obstacleGroup=new Group();
   

}

function draw(){
    
   // background(bgimg);
   if(gameState=="form"){
    form.display();
    bg.addAnimation("bg",formbgimg);
    bg.scale=0.7;

    if(mousePressedOver(button)){
        gameState="rules";
        
    }

   
   }
   

   if(gameState=="rules"){
       background(rulesbgimg);
       form.hide();
       bg.visible=false;
       button.visible=false;

       textSize(50);
       fill("darkblue");
       text("WELCOME",windowWidth/2-140,70);

       textSize(30);
       fill("oliveblue");
       text("This Game is Created by Khushi And Sneha",windowWidth/2-250,150);

       textSize(50);
       fill("darkblue");
       text("RULES",windowWidth/2-95,250);

       textSize(30);
       fill("oliveblue");
       text("1.] To Move The Submarine, You Need To Use The Arrow Keys ↑ ↓ → ← ",windowWidth/2-350,350);

       textSize(30);
       fill("darkblue");
       text("2.] To Win The Level, Conqure The Mariana Trench ",windowWidth/2-350,450);

       textSize(30);
       fill("oliveblue");
       text("3.] If You Touch Any Sea Animals You Lose ",windowWidth/2-350,550);


       textSize(50);
       fill("black");
       text("Press Space Bar To Start  ",windowWidth/2-350,650);
         
       Space.visible= true;
       
       if(keyDown("space")){
           gameState="PLAY";
       }
       
       //form2.display();
   }

   if(gameState=="PLAY"){
       background(rulesbgimg);
       PLAYbg.visible=true;
       Space.visible=false;
       Submarine.visible=true;
       corner.visible=false;
       
       if(keyDown("up")){
           Submarine.y-=4;

       }
       if(keyDown("down")){
        Submarine.y+=4;
       }

       
        PLAYbg.velocityX=4;
        console.log(PLAYbg.x);
       if(PLAYbg.x>900){
           PLAYbg.x=windowWidth/2;
       }
       Obstacle();

       if(obstacleGroup.isTouching(Submarine)){
           gameState="END";
           
       }
   }
  
   drawSprites();
        if(gameState=="END"){
            obstacleGroup.setVelocityXEach(0);
            PLAYbg.velocityX=0;
            fill("black");
            stroke(4);
            textSize(30);
            text("A Long Way To Click Here To Reset",windowWidth/2-100,windowHeight/2);
            reset.visible=true;
            
            if(mousePressedOver(reset)){
                Reset();
            }
        }
        
}

function Obstacle(){
if(frameCount%60==0){
     obstacle=createSprite(0,random(windowHeight/2-300,windowHeight/2+400))
     obstacle.velocityX=3;
     obstacleGroup.add(obstacle);
     obstacle.depth=Submarine.depth;
     Submarine.depth+=1;

     var num=Math.round(random(1,6));
     switch(num){
         case 1: obstacle.addImage(ob2);
         break;
         case 2: obstacle.addImage(ob3);
         break;
         case 3: obstacle.addImage(ob4);
         break;
         case 4: obstacle.addImage(ob5);
         break;
         case 5: obstacle.addImage(ob6);
         break;
         case 6: obstacle.addImage(ob7);
         break;

         }
         obstacle.scale=0.2;

}
    
}

function Reset(){
    gameState="PLAY";
    obstacleGroup.destroyEach();
    text("",windowWidth/2-100,windowHeight/2);
    reset.visible=false;
    

}
