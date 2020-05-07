const Engine = Matter.Engine,World = Matter.World, Bodies = Matter.Bodies;
var ground,cannon;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();
  cannon = new Cannon(PI/3);
}

function draw() {
  background("skyblue");  
  engine = Engine.update;
  ground.display();
  cannon.display();
}
