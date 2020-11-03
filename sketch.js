const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = []
var plinkos = []
var dividers = []

var divisionHeight = 300;

function setup(){
var canvas = createCanvas(600,600);
engine = Engine.create();
world = engine.world;}

function draw(){
Engine.update(engine);

for(var i=0; i<=width; i=1+80){
divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight))}

for(var j=40; j=width; j=j+50){
plinkos.push(new Plinko(j,75))}

for(var j=15; j=width-10; j=j+50){
plinkos.push(new Plinko(j,175))}

plinkos.display();
divisions.display();
particles.display();}