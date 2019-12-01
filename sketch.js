var alien1 , alien2 , alien3;
var player1;
var canvas, bg;

function preload(){
  bg = loadImage("images/back_ground.jpg");
}

function setup() {
  canvas = createCanvas(1200,500);
  alien1 = new Alien(1100,100);
  alien2 = new Alien(1100,250);
  alien3 = new Alien(1100,400);
  player1 = new Player(100,250)
}

function draw() {
  background(bg);
  alien1.display();
  alien2.display();
  alien3.display();
  player1.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    player.move(-10);
  }
  else if(keyCode===DOWN_ARROW){
    player.move(10);
  }
}