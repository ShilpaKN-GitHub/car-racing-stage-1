var canvas, backgroundImage;
var gameState = 0, playerCount = 0;
var form, player, game;
var allPlayers, distance = 0;
var database;

function setup()
{
  scanvas = createCanvas(400, 400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw()
{
  if(playerCount === 4)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clearInterval();
    game.play();
  }
}