createCanvas(windowWidth, windowHeight);
  
  lamp = createSprite(windowWidth/2,windowHeight/2,120,50);
  lamp.addImage("lamp", lampImage);
  //lamp.addImage("lamp", lampImage1);
  //lamp.setCollider("rectangle",0,0,0,0);
  //lamp.debug=false;
  
  leftSprite = createSprite((windowWidth/2-150),(windowHeight/2-150),120,50);
  leftSprite.addImage("img",leftImg);
  leftSprite.scale = 0.2;
  rightSprite = createSprite((windowWidth/2+160),(windowHeight/2-150),120,50);
  rightSprite.addImage("img",rightImg);
  rightSprite.scale = 0.1;
  
  title = createSprite((windowWidth/2),(windowHeight/2+200),120,50);
   title.addImage("img",titleImg);
  title.scale = 0.7;
  
}

function draw() {
  var l=0;
  background("#3b0800");
  background("white");
  if(mousePressedOver(lamp)){
   l=1;
  }
  if(l==1){
    lit = createSprite((windowWidth/2)+20,(windowHeight/2)-75,10,10);
    lit.addAnimation("anim",litAnim);
    lit.scale = 0.2;
    
    lit2 = createSprite((windowWidth/2),(windowHeight/2)-75,10,10);
    lit2.addAnimation("anim",litAnim);
    lit2.scale = 0.2;
    
    lit3 = createSprite((windowWidth/2)-20,(windowHeight/2)-75,10,10);
    lit3.addAnimation("anim",litAnim);
    lit3.scale = 0.2;
  }
  drawSprites();
}
