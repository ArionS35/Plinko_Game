const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var plinko = [];
var division = [];
var particle = [];

function setup() {
  createCanvas(480,620);

  engine= Engine.create()
  world=engine.world

  Engine.run (engine)

  ground1= new Ground(240,610,480,20)
  ground2= new Ground(0,400,20,800)
  ground3= new Ground(480,400,20,800)

  for(i=26;i<480;i=i+60){
     division.push(new Division(i,480))
     }
 
  for(i=0;i<=width;i=i+50){
      plinko.push(new Plinko(i,50))
     }
  for(i=30;i<=width;i=i+50){
      plinko.push(new Plinko(i,100))
     }
  for(i=60;i<=width;i=i+50){
      plinko.push(new Plinko(i,150))
     }
  for(i=60;i<=width;i=i+50){
      plinko.push(new Plinko(i,200))
     }
     

}


function draw() {
  background(0);
  drawSprites();

  if(frameCount%10===0){
  particle.push(new Particle())
  }

  for(i=0;i<particle.length;i++){
  particle[i].display()
  }

  for(i=0;i<division.length;i++){
  division[i].display();
  }

  for(i=0;i<plinko.length;i++){
    plinko[i].display()
    }

  ground1.display()
  ground2.display()
  ground3.display()

}