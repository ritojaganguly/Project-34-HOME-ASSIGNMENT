const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxDrops = 100;


function preload(){
    
}

function setup(){
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  for(var i=0; i<maxDrops; i++){
    drops.push(new createDrops(random(0,400), random(0,400)));
  }
  
}

function draw(){
    background(0,0,0); 
    Engine.update(engine)
    
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
}   

