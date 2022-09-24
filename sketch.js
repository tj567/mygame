var player

var gameState="wait"


function preload(){

  room1img=loadImage("room1.png")
  room2img=loadImage("room2.png")

}



function setup(){
  createCanvas(windowWidth-50,windowHeight-50)

player = createSprite(width/2,height/2,20,20)

  }


function draw(){
  if (gameState==="wait"){
  background(0)}
if (keyDown("space")){
  gameState="play"
}

if(gameState==="play"){
  drawRoom()
  background(room)
  if(keyDown(LEFT_ARROW)){
    player.x -= 5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x += 5
  }

  if(keyDown(UP_ARROW)){
    player.y -= 5
  }

  if(keyDown(DOWN_ARROW)){
    player.y += 5
  }}
  drawSprites()
}

function drawRoom(){
  if(roomChosen = 0){
    var rand=Math.round(random(1,2))

switch(rand){

case 1: room.addImage(room1img)
room.scale=1.8
break;

case 2: room.addImage(room2img)
room.scale=1.8
roomChosen = 1
  }
}}