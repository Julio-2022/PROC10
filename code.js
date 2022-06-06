var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1, laser2, edges;
var treasure, thief;

function setup() {
  laser1 = createSprite(100,200,200,5);
  laser1.shapeColor = "red";
  
  laser2 = createSprite(300,100,200,5);
  laser2.shapeColor = "red";
  
  thief = createSprite(15,390,30,30);
 
  treasure = createSprite(390,10,30,30);
  treasure.shapeColor="blue";

  edges = createEdgeSprites();
}

function draw() {
  background(220);
  drawSprites();
  createEdgeSprites();
  thief.velocityX=0;
  thief.velocityY=0;
if(keyDown("UP_ARROW")) { 
thief.velocityX=0;
thief.velocityY=-4;
}
if(keyDown("DOWN_ARROW")) { 
thief.velocityX=0;
thief.velocityY=4;
}
if(keyDown("LEFT_ARROW")) { 
thief.velocityX=-4;
thief.velocityY=0;
}
if(keyDown("RIGHT_ARROW")) { 
thief.velocityX=4;
thief.velocityY=0;
}
if(keyDown("space")) {
  laser1.velocityY= 2;
  laser2.velocityY= -2;
}
if(laser1.isTouching(thief)) {
  stroke(0);
  fill("black");
  textSize(24);
  text("Atrapa al ladrón",120,200);
  thief.velocityX=0;
  thief.velocityY=0;
  laser1.velocityY=0;
  laser2.velocityY=0;
}
if(laser2.isTouching(thief)) {
  stroke(0);
  fill("black");
  textSize(24);
  text("Atrapa al ladrón",120,200);
  thief.velocityX=0;
  thief.velocityY=0;
  laser1.velocityY=0;
  laser2.velocityY=0
}
if(thief.isTouching(treasure)) {
  stroke(0);
  fill("black");
  textSize(24);
  text("El ladrón consiguió el diamante",10,200);
  thief.velocityX=0;
  thief.velocityY=0;
  laser1.velocityY=0;
  laser2.velocityY=0;
}

  laser1.bounceOff(edges);
  laser2.bounceOff(edges);

  fill("white");
  drawSprites();
}
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
