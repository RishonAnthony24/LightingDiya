var lamp,lampImage,litAnim,lit,lit2,lit3,leftImg,rightImg,leftSprite,rightSprite,titleImg,title;
function preload(){
  lampImage = loadImage("lamp2.jpeg");
  lampImage1 = loadImage("images.jpeg");
  lampImage2 = loadImage("Vilakku_Img.jpeg");
  litAnim = loadAnimation("edit3.png","edit4.png");
  libaImg = loadImage("LIBA.jpeg");
  aluminiImg = loadImage("Alumini.jpeg");
  titleImg = loadImage("Title1.jpg");
  titleImg2 = loadImage("Title2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  lamp = createSprite(windowWidth/2,windowHeight/2,120,50);
  lamp.addImage("lamp", lampImage2);
  //lamp.addImage("lamp", lampImage);
  //lamp.addImage("lamp", lampImage1);
  //lamp.setCollider("rectangle",0,0,0,0);
  //lamp.debug=false;
  lamp.scale=0.4;
  
  liba = createSprite((windowWidth/2-200),(windowHeight/2-150),120,50);
  liba.addImage("img",libaImg);
  liba.scale = 0.4;
  
  alumini = createSprite((windowWidth/2+170),(windowHeight/2+170),120,50);
  alumini.addImage("img",aluminiImg);
  alumini.scale = 0.2;
  
  title = createSprite((windowWidth/2+50),(windowHeight/2-200),120,50);
  title.addImage("img",titleImg);
  title.scale = 0.8;
  
  title2 = createSprite((windowWidth/2),(windowHeight/2+160),120,50);
  title2.addImage("img1",titleImg2);
  title2.scale = 0.8;
}

function draw() {
  var l=0;
  background("white");
  if(mousePressedOver(lamp)){
   l=1;
  }
  if(l==1){
    lit = createSprite((windowWidth/2)+30,(windowHeight/2)-65,10,10);
    lit.addAnimation("anim",litAnim);
    lit.scale = 0.2;
    
    lit2 = createSprite((windowWidth/2)-5,(windowHeight/2)-65,10,10);
    lit2.addAnimation("anim",litAnim);
    lit2.scale = 0.2;
    
    lit3 = createSprite((windowWidth/2)-40,(windowHeight/2)-65,10,10);
    lit3.addAnimation("anim",litAnim);
    lit3.scale = 0.2;
  }
  drawSprites();
}

