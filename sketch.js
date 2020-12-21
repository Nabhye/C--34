const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
function setup() {
  createCanvas(1200,800);     
  //createSprite(400, 200, 50, 50);
   engine = Engine.create();
    world = engine.world;
  ground = new Ground(600,600,1200,30);
  box1 = new Box(900,100,70,70);
  //box1 to box6 900
  //box7 to 12 800
  //box 13 to 17 700
  ball = new Ball (200,200,80,80);
  rope = new Rope(ball.body,{x:500,y:50});
  }

function draw() {
  background(255,255,255);  
  ground.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y:mouseY});
}
