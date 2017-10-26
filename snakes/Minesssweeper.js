// Minesssweeper Sssoccer
//
// A Snake version of soccer. Two snakes push a ball around with their heads, trying
// to get it through the goal to score points, dying constantly if they run into walls or each other.

BasicGame.Minesssweeper = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Minesssweeper.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Minesssweeper.prototype.constructor = BasicGame.Minesssweeper;


// create
//
// Super + sets some basic variables to control where things appear.

BasicGame.Minesssweeper.prototype.create = function () {
  this.SNAKE_START_X = 11;
  this.SNAKE_START_Y = 27;

  this.NUM_ROWS = this.game.height/GRID_SIZE;
  this.NUM_COLS = this.game.width/GRID_SIZE;

  this.WALL_LEFT = 1;
  this.WALL_RIGHT = this.NUM_COLS-2;
  this.WALL_TOP = 3;
  this.WALL_BOTTOM = this.NUM_ROWS - this.WALL_TOP - 1;

  this.setupGridDimensions();
  this.createMap();

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  // Name the state for resetting purposes
  this.stateName = "Minesssweeper";
};


BasicGame.Minesssweeper.prototype.createMap = function () {
  this.map = [];
  this.mapGroup = this.game.add.group();
  for (var y = 0; y < this.WALL_BOTTOM - this.WALL_TOP - 1; y++) {
    var row = [];
    this.map.push(row);
    for (var x = 0; x < this.WALL_RIGHT - this.WALL_LEFT - 1; x++) {
      var sprite;
      var type;
      if (Math.random() < 0.9 || (x + this.WALL_LEFT + 1 == this.SNAKE_START_X && y + this.WALL_TOP + 1 == this.SNAKE_START_Y)) {
        type = "SAFE";
        sprite = this.mapGroup.create((x + this.WALL_LEFT + 1)*GRID_SIZE,(y+ this.WALL_TOP + 1)*GRID_SIZE,'map_tile');
      }
      else {
        type = "BOMB";
        sprite = this.mapGroup.create((x + this.WALL_LEFT + 1)*GRID_SIZE,(y+ this.WALL_TOP + 1)*GRID_SIZE,'map_tile');
      }
      row.push({type: type, sprite: sprite});
    }
  }
};


// tick
//
// Complete override. Does mostly the same things, but ticks the second snake too

BasicGame.Minesssweeper.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  this.checkMapCollision();
};


BasicGame.Minesssweeper.prototype.checkMapCollision = function () {
  var tileX = (this.snake.head.x / GRID_SIZE) - this.WALL_LEFT - 1;
  var tileY = (this.snake.head.y / GRID_SIZE) - this.WALL_TOP - 1;

  if (tileY < 0 || tileY >= this.map.length || tileX < 0 || tileX >= this.map[0].length) return;

  var tile = this.map[tileY][tileX];
  if (tile.type == "SAFE") {
    tile.sprite.visible = false;

    // Now we need to do the calculations on clearing the map around this square
    // based on the knowledge it gives...
  }
  else if (tile.type == "BOMB") {
    tile.sprite.loadTexture('wall');
    this.die();
  }
}


// repositionApple
//
// We don't do this, so override to cancel

BasicGame.Minesssweeper.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
  // because it's based on the data about the colossus
};


// startAppleTimer
//
// We don't do this, so override to cancel

BasicGame.Minesssweeper.prototype.startAppleTimer = function () {
};
