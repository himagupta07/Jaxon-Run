var runner;
var track;
var trackImage;
var runner_moving;
var side1;
var side2;

function preload(){
  //pre-load images
  trackImage=loadImage("path.png");
  runner_moving=loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here\
track= createSprite(200,200);
track.addImage("track",trackImage);
track.scale= 1.2;

runner= createSprite(200,200,10,10);
runner.addAnimation(runner_moving);

side1= createSprite(55, 200,20,200);
 side2= createSprite(350,200,20,200);
 box= createSprite(200,200,20,20);
box.visible= false;

}

function draw() {
background("black");

/*createEdgeSprites();
runner.bounceOff(topEdge);
runner.bounceOff(bottomEdge);
runner.bouncOff("side1");
runner.bounceOff("side2");*/

track.velocityY= 4;

//Moving the runner
if(keyDown("left_Arrow")){
  runner.velocityX= -3;
}

if(keyDown("right_Arrow")){
  runner.velocityX= 3;
}

runner.x= World.mouseX;

if(track.y > 400){
  track.y= height/2;
}

//Making  the sides invisible
side1.visible= false;
side2.visible= false;

 

runner.collide(side2);
runner.collide(side1);
runner.collide(track);

console.log(runner.Y);
console.log(track.Y);
drawSprites();
}
