const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.World;
const Constraint=Matter.Constraint;

var engine,world;
var towerBase1,towerbase2;
var towerblocks,ball,ground;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //ground = new Ground(600,height,1200,20);
  //platform = new Ground(150, 305, 300, 170);

  ball=new Ball(50,200);
  


}

function draw() {
  background(255,255,255);  
  drawSprites();
}