var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesimage
var leaves,orangeleaves,leavesImg,orangeleavesImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage ("apple.png")
  leavesImg= loadImage("leaf.png")
  orangeleavesImg = loadImage = loadImage("orangeleaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnorangeleaves();
  spawnleaves();
  spawnapples();
  drawSprites();
}

function spawnapples() {
   if (frameCount % 80 === 0) {
     apples = createSprite(390,100,40,10);
    apples.x = Math.round(random(10,300));
    apples.addImage("apple",applesImg);
    apples.scale = 0.10;
    apples.velocityY = 3;
    
     //assign lifetime to the variable
     apples.lifetime = 250;
   }
  }

  function spawnorangeleaves() {
    if (frameCount % 80 === 0) {
      orangeleaves = createSprite(390,100,40,10);
      orangeleaves.x = Math.round(random(10,300));
      orangeleaves.addImage("apple",orangeleavesImg);
      orangeleaves.scale = 0.10;
      orangeleaves.velocityY = 3;
     
      //assign lifetime to the variable
      orangeleaves.lifetime = 250;
    }
   }
   function spawnleaves() {
    if (frameCount % 80 === 0) {
      leaves = createSprite(390,100,40,10);
      leaves.x = Math.round(random(10,300));
      leaves.addImage("apple",leavesImg);
      leaves.scale = 0.10;
     leaves.velocityY = 3;
     
      //assign lifetime to the variable
      leaves.lifetime = 250;
    }
   }
      
    