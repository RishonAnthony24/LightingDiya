var lamp,lampImage,litAnim,lit;
function preload(){
  lampImage = loadImage("Lamp.jpeg");
  lampImage1 = loadImage("images.jpeg");
  litAnim = loadAnimation("edit3.png","edit4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  lamp = createSprite(windowWidth/2,windowHeight/2,120,50);
  //lamp.addImage("lamp", lampImage);
  lamp.addImage("lamp", lampImage1);
  //lamp.setCollider("rectangle",0,0,0,0);
  //lamp.debug=false;
  
  
}

function draw() {
  var l=0;
  background("#3b0800");
  if(mousePressedOver(lamp)){
   l=1;
  }
  if(l==1){
    lit = createSprite(300,190,10,10);
    lit.addAnimation("anim",litAnim);
    lit.scale = 0.3;
  }
  drawSprites();
}

