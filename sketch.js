const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine,worl
var raindrop=[]
var maxdrop =100

function setup(){
    var canvas = createCanvas(1200,400);
   engine =Engine.create
   world= engine.world

if (frameCount%150===0){
    for (var i=0;i<maxdrop;i++){
        raindrop.push(new createDrop(random(0,400),random(0,400) ))
    }
}
    
}

function draw(){
    background("black");
    Engine.update(engine)
     for (var i=0;i<maxdrop;i++){
         raindrop[i].showDrop()
         raindrop[i].updateY()
     }
}   

