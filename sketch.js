const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
BobDiameter=40;	
bob1=new Bob(400,290,65);
bob2=new Bob(465,290,65);
bob3=new Bob(530,290,65);
bob4=new Bob(335,290,65);
bob5=new Bob(270,290,65);

roof = new Roof(400,45,375,30);

rope1 = new Rope(bob1.body, roof.body,-BobDiameter*2, 0);
rope2 = new Rope(bob2.body, roof.body,-BobDiameter*1, 0);
rope3 = new Rope(bob3.body, roof.body,BobDiameter*2, 0);
rope4 = new Rope(bob4.body, roof.body,BobDiameter*1, 0);
rope5 = new Rope(bob5.body, roof.body,0, 0);
}
function draw() {
	rectMode(CENTER);
	
	background(255);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  roof.display();
 rope1.display();
 rope5.display();
 rope4.display();
 rope3.display();
 rope2.display();
 
 keyPressed();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob3.body,bob3.body.position,{x:50,y:45});

	}
}





