var gameRect1, gameRect2, gameRect3, gameRect4;

var fixedRect, movingRect;

function setup() {
  createCanvas(1600,1200);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameRect1 = createSprite(100,100,50,50);
  gameRect1.shapeColor = "blue";
  gameRect2 = createSprite(200,100,50,50);
  gameRect2.shapeColor = "blue";
  gameRect3 = createSprite(300,100,50,50);
  gameRect3.shapeColor = "blue";
  gameRect4 = createSprite(400,100,50,50);
  gameRect4.shapeColor = "blue";
  movingRect.velocityY = -5;
  gameRect1.velocityY = 5;
  movingRect.velocityX = -5;
  gameRect1.velocityX = 5;
}

function draw() {
  background("yellow");  
  
  
  bounceOff(movingRect,gameRect1);

  drawSprites();
}



