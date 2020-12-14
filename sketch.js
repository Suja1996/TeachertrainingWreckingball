const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone,ground1

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
ground1=new Ground(1500,790,3000,20)
ball1=new Ball(500,500,50,50)

rope1=new Rope(ball1.body,{x:500,y:100});
box1=new Box(620,750,50,50)
box2=new Box(620,750,50,50)
box3=new Box(620,750,50,50)
box4=new Box(620,750,50,50)
box5=new Box(620,750,50,50)
box6=new Box(620,750,50,50)
box7=new Box(620,750,50,50)
box8=new Box(620,750,50,50)

}

function draw(){
background("yellow")
Engine.update(engine)
ball1.display();
ground1.display();
rope1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
}



function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

