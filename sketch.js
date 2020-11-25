var movingRectangle;
var fixedRectangle;
var object1, object2;
var gameObj1, gameObj2, gameObj3, gameObj4, gameObj5;


function setup() {
  createCanvas(1200, 800);
  movingRectangle = createSprite(100, 600, 20, 40);
  movingRectangle.shapeColor = "blue"
  fixedRectangle = createSprite(100, 100, 20, 40);
  fixedRectangle.shapeColor = "red"
  gameObj1 = createSprite(300, 500, 20, 20);
  gameObj2 = createSprite(400, 500, 20, 20);
  gameObj3 = createSprite(200, 500, 20, 20);
  gameObj4 = createSprite(800, 500, 20, 20);
  gameObj5 = createSprite(700, 500, 20, 20);
  movingRectangle.debug = true;
  fixedRectangle.debug = true;
}

function draw() {
  background(255, 255, 255);
  movingRectangle.y = World.mouseY;
  movingRectangle.x = World.mouseX;

  //console.log(fixedRectangle.x - movingRectangle.x);
  if (isTouching(movingRectangle, gameObj1) || isTouching(movingRectangle, gameObj2) || isTouching(movingRectangle, gameObj3) ||
    isTouching(movingRectangle, gameObj4) || isTouching(movingRectangle, gameObj5)) {
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "yellow";

  }
  else {
    movingRectangle.shapeColor = "blue";
    fixedRectangle.shapeColor = "red";
  }
 drawSprites();
}