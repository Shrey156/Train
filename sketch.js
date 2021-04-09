const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg,collision1;
var ground,rock;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var chain1,chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggie1= new Boggie(650,350,90,90);
  boggie2= new Boggie(550,350,90,90);
  boggie3= new Boggie(450,350,90,90);
  boggie4= new Boggie(350,350,90,90);
  boggie5= new Boggie(250,350,90,90);
  boggie6= new Boggie(150,350,90,90)

  chain1 = new SlingShot(boggie1.body,boggie2.body);
  chain2 = new SlingShot(boggie2.body,boggie3.body);
  chain3 = new SlingShot(boggie3.body,boggie4.body);
  chain4 = new SlingShot(boggie4.body,boggie5.body);
  chain5 = new SlingShot(boggie5.body,boggie6.body);

  rock=new Rock(1100,350,150,150);

collision1 = Matter.SAT.collides(boggie1.body,rock.body);
if(collision1.collided){
  console.log("collided")
  textSize(60);
  stroke("black")
  text("XVZ",550,190)
}
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  ground.show();
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();
  rock.show();


  }
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(boggie1.body,boggie1.body.position,{x:2,y:0});
  }
}
  
