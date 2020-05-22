var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);

  bullet= createSprite(50, 200, 50, 50);
  bullet.shapeColor="white"

wall= createSprite(1200, 200, 60, thickness,height/2);
wall.shapeColor="blue"

  speed=random(223,321)

  weight=random(30,52)

  thickness=random(22,83)

  bullet.velocityX=speed;
}

function draw() {
  background("blue"); 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
     wall.shapeColor=color(255,0,0)
    
      text("not effective",150,80);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0)
    
      text(" effective",150,80);
      
     }
     drawSprites();
  }

}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(  bulletRightEdge>=wallLeftEdge){
  return true
  }
  return false;
}