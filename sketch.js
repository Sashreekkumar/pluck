const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 
var ground,tree;
var stone;
var boyImage,boy;
var launcher;
var mango1,mango2,mango3,mango4,mango5;
 
function preload()
{
 boyImage=loadImage("boy.png"); 
}
 
function setup() {
    createCanvas(1200, 600);
 
    engine = Engine.create();
    world = engine.world;
 
    //Create the Bodies Here.
    ground=new Ground(600,590,1200,10);
    tree=new Tree(950,600);
 
   
 
    boy=createSprite(250,500,10,10);
    boy.addImage(boyImage);
    boy.scale=0.15;
	
	stone=new Stone(185,418,40,30);
	
    mango1=new Mango(880,90,15);
    mango2=new Mango(970,90,15);
    mango3=new Mango(1060,150,15);
    mango4=new Mango(960,140,15);
	mango5=new Mango(850,180,15);
	mango6=new Mango(890,245,15);
	mango7=new Mango(1095,253,15);
	mango8=new Mango(1080,185,15);
	mango9=new Mango(820,280,15);
	mango10=new Mango(970,250,15);
	mango11=new Mango(960,190,15);	
 
    launcher=new Hook(stone.body,{x:185,y:418});
 
	Engine.run(engine);
  
}
 
function draw() {
  rectMode(CENTER);
  background(230);
 
  textSize(25);
  text("Press Space to Restart",50 ,50);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 
 launcher.display();
 
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);
 detectCollision(stone,mango10);
 detectCollision(stone,mango11);
 
 drawSprites();

 stone.display();
 

 text(mouseX +"," + mouseY, mouseX, mouseY)
 
}
 
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 
}
 
function mouseReleased(){
    launcher.fly();
}
 
function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false);
   }
}
 
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.body,{x:235,y:420})
        launcher.attach(stone.body);
    }
}
