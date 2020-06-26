var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var players,player1,player2,player3,player4;
var plr1img,plr2img,plr3img,plr4img;
var line1,line2,line3,line4,line5,line6;

function preload(){
  plr1img = loadImage("playerimage.png");
  plr2img = loadImage("playerimage.png");
  plr3img = loadImage("playerimage.png");
  plr4img = loadImage("playerimage.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
