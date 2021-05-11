//Create variables here
var database
var foodS
var foodStock
var happyDog
var dog


var foodObj


function preload()
{
	//load images here
happyDog =loadImage("sprites/dogImg1.png")
dog =loadImage("dogImg.png")


}

function setup() {
	createCanvas(500, 500);
  database =firebase.database();
  dog = createSprite(250,250,50,50);
  dog =addImage("sprites/dogImg.png")
  foodStock =database.ref('food');
  foodStock.on("value",readStock);
  object(food.js);

  feed =CreateButton("fed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood =CreateButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
  
}


function draw() { 
  background(46,139,87);
  if(lastFed>=12){
    text("Last Feed :"+ lastFeed%12 + "PM" ,350,30);
  }else if(lastFed==0){
    text("Last Fed : 12 AM ",350,30);
  }else{
    text("Last Feed :" + lastFed + "AM",350,30);
  }
  fedTime=database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();

  });

  

    object.display();
  

  drawSprites();
  //add styles here
textSize(20);
Fill ("black");
stroke ("black");

text("Note:Press UP_ARROW key tofeed the dog",50,50);
text("Food remaining:"+ foodS ,250,200);
}

function readStock(data){
foodS =data.val();
}

function writeStock(x){
  database.ref('/').update({

    


    food:x
  })
}

//function to update food stock and the last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    feedTime:hour()

})
}

//function to add in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foods
  })
}
