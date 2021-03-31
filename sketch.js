const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var hammer;
function setup(){
    var canvas = createCanvas(1200,550);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600, 600, 1200,10);
    hammer = new Hammer(10,100);
    rubberBall = new Rubber(600, 50, 40);
    iron = new Iron(400, 450, 30, 30);
    stone = new Stone(200, 450, 50, 50);
}
function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    hammer.display();
    rubberBall.display();
    stone.display();
    iron.display();
}
