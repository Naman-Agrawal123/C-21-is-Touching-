var fixedRect, movingRect;
var object1, object2, object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite (350,400,25,40);
  object1.shapeColor = "yellow";

  object2 = createSprite (250,400,40,15);
  object2.shapeColor = "blue";

  object3 = createSprite (150,400,15,20);
  object3.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching (movingRect, object3)) {
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";
  }

  else {
    movingRect.shapeColor = "green";
    object3.shapeColor = "pink";
  }

  drawSprites();
}

