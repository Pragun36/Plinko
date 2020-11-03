class Particles{
constructer(x,y,radius){

var options = {
restitution : 0.4,
isStatic : false}

this.body = Bodies.circle()
this.radius = radius;

World.add(world,this.body);}

display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
noStroke();
fill("white");
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);
pop();}}