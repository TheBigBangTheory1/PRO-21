
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var g;
var left;
var right;
var mountain;
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
    background(255, 204, 0);
	

	engine = Engine.create();
	world = engine.world;
	fill("white");
g = new Ground(0, 700,16000 , 20)

right = new Ground(600, 700, 20, 200)
left = new Ground(700, 700, 20, 200)
g.display();
right.display();
left.display();
 fill("white")
    var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	
    


	ball = Matter.Bodies.circle(200, 0, 20, ball_options)
    World.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
background(255, 204, 0);
  rectMode(CENTER);
  g = new Ground(0, 700,16000 , 20)

right = new Ground(600, 700, 20, 200)
left = new Ground(700, 700, 20, 200)
g.display();
right.display();
left.display();
  
ellipse(ball.position.x, ball.position.y, 30)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:20, y:-45})
	   }
}

