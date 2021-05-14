
var fixedRect, movingRect;
var gameObject1, gameObject2;
var car,wall;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  car = createSprite(300,400,50,50);
  
    wall = createSprite(900,400,40,100);
    
  car.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }


  if(isTouching(car,wall)){
    car.shapeColor = ("red");
    wall.shapeColor = ("yellow");
  }
else{
  car.shapeColor = ("purple");
  wall.shapeColor = ("darkblue");
}




//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return 1;
  }
  else {
    return 0;
  } 
}


