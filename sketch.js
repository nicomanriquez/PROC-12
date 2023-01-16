var path,boy, leftBoundary,rightBoundary;
var pathImg,boyAnim;
var i;

function preload(){
 pathImg = loadImage("path.png")
 boyAnim = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
  path =createSprite (205,200); 
  path.addImage(pathImg);
  path.scale=1.2;

  boy = createSprite(200,380);
  boy.addAnimation("boyAnimation", boyAnim);
  boy.scale=0.45;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}
function moverBoy(){
  if (keyDown(RIGHT_ARROW)){
  boy.x=boy.x+5
  }
  if (keyDown(LEFT_ARROW)){
    boy.x=boy.x-5
    }
}
function draw() {
  background(0);
  
  drawSprites();
  moverBoy();
  path.velocityY = 4;


  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }


}
