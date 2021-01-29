
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




var dog,sadDog,happyDog, milk,food;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  milk= new Food(1000,1000,100,100);

  feed=createButton("Feed the Dog");
  feed.position(700,100);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,100);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  Engine.update(engine);
  milk.display();
  drawSprites();
}
function readStock(data){
  food = data.val();
  
  
  }
  function writeStock(x){
   if (x<= 0){
     x = 0 ; 
  
   }
   else {
     x = x-1
   }
   database.ref('/').update({
     Food:x
   })
  }
  function feedDog(){
    dog.addImage(happyDog);

    food.updateFoodStock(food.getFoodStock()-1);
    database.ref("/").update({
      Food:food.getFoodStock(),
    })
  }
  
   function addFoods(){
   food++;
   database.ref("/").update({
   Food:food
})
 } 
