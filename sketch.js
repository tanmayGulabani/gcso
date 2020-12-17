var car, wall;
var speed, height;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(50,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,69, height/2);
  wall.shapeColor="gray"

  deformation=((0.5*weight*speed*speed)/22500)

}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(wall.width+car.width)/2){
     car.velocityX=0;
     
     if(deformation<100){
       car.shapeColor="green"
     }
     if(deformation>100 && deformation<180){
        car.shape="yellow";
     }
     if(deformation>180){
      car.shapeColor="red"
    }
    
  }
  drawSprites();
}