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

  this.BOMB_CHANCE = 0.1;

  this.setupGridDimensions();
  this.createMap();

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.FLIP_TICK = this.SNAKE_TICK/3;

  this.toFlip = [];
  this.nowFlipping = [];

  this.flipTicker = this.game.time.create(false);
  this.flipTicker.add(Phaser.Timer.SECOND * this.FLIP_TICK, this.flipTick, this);
  this.flipTicker.start();

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
      if (Math.random() < 1 - this.BOMB_CHANCE || (x + this.WALL_LEFT + 1 == this.SNAKE_START_X && y + this.WALL_TOP + 1 == this.SNAKE_START_Y)) {
        type = "SAFE";
        sprite = this.mapGroup.create((x + this.WALL_LEFT + 1)*GRID_SIZE,(y+ this.WALL_TOP + 1)*GRID_SIZE,'map_tile');
        // sprite.visible = false;
      }
      else {
        type = "BOMB";
        sprite = this.mapGroup.create((x + this.WALL_LEFT + 1)*GRID_SIZE,(y+ this.WALL_TOP + 1)*GRID_SIZE,'map_tile');
      }
      row.push({type: type, sprite: sprite, x: x, y: y, toFlip: false});
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


BasicGame.Minesssweeper.prototype.flipTick = function () {
  this.flipTicker.add(Phaser.Timer.SECOND * this.FLIP_TICK, this.flipTick, this);

  this.nowFlipping = this.toFlip.slice();
  this.toFlip = [];

  console.log("FLipping " + this.nowFlipping.length + " tiles.");
  this.nowFlipping.forEach(function (tile) {
    this.flipTile(tile);
  },this);
};


BasicGame.Minesssweeper.prototype.checkMapCollision = function () {
  var tileX = (this.snake.head.x / GRID_SIZE) - this.WALL_LEFT - 1;
  var tileY = (this.snake.head.y / GRID_SIZE) - this.WALL_TOP - 1;

  if (tileY < 0 || tileY >= this.map.length || tileX < 0 || tileX >= this.map[0].length) return;

  var tile = this.map[tileY][tileX];
  if (tile.type == "SAFE") {
    this.flipTile(tile,tileX,tileY);
  }
  else if (tile.type == "BOMB" && !this.snake.dead) {
    tile.sprite.loadTexture('wall');
    this.die();
  }
};


BasicGame.Minesssweeper.prototype.flipTile = function (tile) {

  tile.sprite.visible = false;

  var bombs = 0;
  for (var y = -1; y <= 1; y++) {
    for (var x = -1; x <= 1; x++) {
      var neighbourX = tile.x + x;
      var neighbourY = tile.y + y;
      // Make sure this 'neighbour' is really available
      if (neighbourY < 0 || neighbourY >= this.map.length) continue;
      if (neighbourX < 0 || neighbourX >= this.map[neighbourY].length) continue;
      var neighbour = this.map[neighbourY][neighbourX];
      if (neighbour.type == "BOMB") {
        bombs++;
      }
    }
  }

  if (bombs == 0) {
    for (var y = -1; y <= 1; y++) {
      for (var x = -1; x <= 1; x++) {
        if (x == 0 && y == 0) continue;

        var neighbourX = tile.x + x;
        var neighbourY = tile.y + y;
        // Make sure this 'neighbour' is really available
        if (neighbourY < 0 || neighbourY >= this.map.length) continue;
        if (neighbourX < 0 || neighbourX >= this.map[neighbourY].length) continue;
        var neighbour = this.map[neighbourY][neighbourX];
        // Make sure this neighbour isn't already processed
        if (neighbour.sprite.visible && !neighbour.toFlip) {
          neighbour.toFlip = true;
          this.toFlip.push(neighbour);
        }
      }
    }
  }
  else {
    this.addTextToGrid(tile.x + this.WALL_LEFT + 1,tile.y + this.WALL_TOP + 1,bombs+"",this.textGroup);
  }
};


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