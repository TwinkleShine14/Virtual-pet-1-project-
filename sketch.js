var dog
var happyDog
var database
var foodS
var foodstock

function preload()
{
	dog=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();

  dog1= createSprite(250,380,5,5)
  dog1.addImage(dog)
dog1.scale= 0.2
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  

  background (46,139,87)

  if(keyWentDown (UP_ARROW)){
  writeStock(foodS)
  dog1.addImage(happyDog)
}

  drawSprites();
  
  textSize= 20
  fill("red")
  text("Note: Press UP_ARROW key To Feed Drago Milk!", 100, 100)
}

function readStock (data){
  foodS = data.val();
}

function writeStock(x){
  if (x>0){
    x=x-1
  }
  else {
    x=0
  }
  database.ref('/').update({Food:x})
}

