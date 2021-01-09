const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var b1,b2,b3,b4,b5,b6,b7,b17,b9,b10,b11,b12,b13,b14,b15,b16;

var b17, b18, b19, b20, b21, b22, b23, b24, b25;

var ground;

var stand1, stand2;

var polygon;

var slingshot;

var backgroundImage;

var scoregame = 0;

function preload() {
  getTime()
}


function setup() {
  createCanvas(1200,400);
  background(0,0,0)
  engine = Engine.create();
  world = engine.world;


  b1 = new Box(600, 255, 30, 40);
  b2 = new Box(570, 255, 30, 40);
  b3 = new Box(540, 255, 30, 40);
  b4 = new Box(510, 255, 30, 40);
  b5 = new Box(630, 255, 30, 40);
  b6 = new Box(660, 255, 30, 40);
  b7 = new Box(690, 255, 30, 40);
  b9 = new Box(600, 215, 30, 40);
  b10 = new Box(570, 215, 30, 40);
  b11 = new Box(540, 215, 30, 40);
  b12 = new Box(630, 215, 30, 40);
  b13 = new Box(660, 215, 30, 40);
  b14 = new Box(600, 175, 30, 40);
  b15 = new Box(570, 175, 30, 40);
  b16 = new Box(630, 175, 30, 40);
  b17 = new Box(600, 135, 30, 40);

  /*b18 = new Box(1000,120,30,40);
  b19 = new Box(1000,120,30,40);
  b20 = new Box(1000,120,30,40);
  b21 = new Box(1000,120,30,40);
  b22 = new Box(1000,120,30,40);
  b23 = new Box(990,120,30,40);
  b24 = new Box(1000,120,30,40);*/

  blocks1 = new Box(840, 175, 30, 40);
  blocks2 = new Box(870, 175, 30, 40);
  blocks3 = new Box(900, 175, 30, 40);
  blocks4 = new Box(930, 175, 30, 40);
  blocks5 = new Box(960, 175, 30, 40);

  blocks6 = new Box(870, 135, 30, 40);
  blocks7 = new Box(900, 135, 30, 40);
  blocks8 = new Box(930, 135, 30, 40);

  blocks9 = new Box(900, 95, 30, 40);



  stand1 = new Ground(600, 280, 210, 10);
  stand2 = new Ground(900, 200, 200, 10)
  

  polygon = new Polygon(200, 270, 23, 23);

  slingshot = new SlingShot(polygon.body, {x:200, y:260});


  
  
}

function draw() {
  if(backgroundImage) 
  background(backgroundImage);

  textSize(35);
  //fill(100,168,21);
  text("Score:"+ scoregame,width-300,50)

console.log(scoregame)

  Engine.update(engine);  

 // console.log(polygon.body.position);

  fill("blue")
  textSize(20)
  text("Drag the Hexagonal and realease it towards the Blocks ",200,40)

  drawSprites();

  

  polygon.display();

  slingshot.display();

  stand1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();

  
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();

  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  




  blocks1.display()
  blocks2.display();
  blocks3.display()
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

  

  stand2.display();



}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
  
  
  }
  
  
  function mouseReleased(){
  slingshot.fly();
  
  }

  function keyPressed() {
    if (keyCode === 32) {
      slingshot.attach(polygon.body);
    }
  }

  async function getTime() {
  
    var getinfo= await   fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var infotype = await getinfo.json();
    console.log(infotype)
      
    var time = infotype.datetime;
    console.log(time);

    var hr = time.slice(11,13);
    console.log(hr);

    if(hr >= 6 && hr <=18) {
        bg = "sky for game.jpg";
    } else {
        bg = "nightsky...jpg";

    }

    backgroundImage = loadImage(bg);
    console.log(backgroundImage)
  }