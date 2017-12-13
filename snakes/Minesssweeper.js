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
  this.SNAKE_START_Y = 26;

  this.NUM_ROWS = this.game.height/GRID_SIZE;
  this.NUM_COLS = this.game.width/GRID_SIZE;

  this.WALL_LEFT = 1;
  this.WALL_RIGHT = this.NUM_COLS-2;
  this.WALL_TOP = 3;
  this.WALL_BOTTOM = this.NUM_ROWS - this.WALL_TOP - 1;

  this.BOMB_CHANCE = 0.08;
  this.totalSafe = 0;
  this.totalFlipped = 0;

  this.setupGridDimensions();
  this.createMap();

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  // this.SNAKE_TICK *= 1.5;
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
      var screenX = x + this.WALL_LEFT + 1;
      var screenY = y + this.WALL_TOP + 1;
      var sprite;
      var type;
      if (y == 0 || y == this.WALL_BOTTOM - this.WALL_TOP - 2 || x == 0 || x == this.WALL_RIGHT - this.WALL_LEFT - 2) {
        type = "WALL";
        sprite = this.mapGroup.create(screenX*GRID_SIZE,screenY*GRID_SIZE,'wall');
      }
      else if (Math.random() < 1 - this.BOMB_CHANCE || (Math.abs(screenX - this.SNAKE_START_X) < 3 && Math.abs(screenY - this.SNAKE_START_Y) < 3)) {
        type = "SAFE";
        sprite = this.mapGroup.create(screenX*GRID_SIZE,screenY*GRID_SIZE,'map_tile');
        this.totalSafe++;
        // sprite.visible = false;
      }
      else {
        type = "BOMB";
        sprite = this.mapGroup.create(screenX*GRID_SIZE,screenY*GRID_SIZE,'map_tile');
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

  if (!this.controls) {
    this.checkMapCollision();
  }
};


BasicGame.Minesssweeper.prototype.flipTick = function () {
  this.flipTicker.add(Phaser.Timer.SECOND * this.FLIP_TICK, this.flipTick, this);

  this.nowFlipping = this.toFlip.slice();
  this.toFlip = [];

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
  else if ((tile.type == "WALL" || tile.type == "BOMB") && !this.snake.dead) {
    tile.sprite.loadTexture('wall');
    this.die();
  }
};


BasicGame.Minesssweeper.prototype.flipTile = function (tile) {

  if (tile.sprite.visible == false) return;

  tile.sprite.visible = false;
  this.totalFlipped++;

  if (this.totalFlipped == this.totalSafe) {
    this.gameOver("YOU WIN");
  }

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
        if (neighbour.sprite.visible && !neighbour.toFlip && neighbour.type != "WALL") {
          neighbour.toFlip = true;
          this.toFlip.push(neighbour);
        }
      }
    }
  }
  else {
    this.addTextToGrid(tile.x + this.WALL_LEFT + 1,tile.y + this.WALL_TOP + 1,bombs+"");
  }
};

BasicGame.Minesssweeper.prototype.gameOver = function (message) {
  this.snake.dead = true;
  for (var y = this.WALL_TOP; y <= this.WALL_BOTTOM - this.WALL_TOP + 1; y++) {
    for (var x = this.WALL_LEFT; x <= this.WALL_RIGHT - this.WALL_LEFT; x++) {
      this.textGrid[y][x].text = ' ';
    }
  }
  for (var y = 0; y < this.map.length; y++) {
    for (var x = 0; x < this.map[y].length; x++) {
      if (this.map[y][x].type == "BOMB") {
        this.map[y][x].sprite.loadTexture('wall');
      }
      else if (this.map[y][x].type == "SAFE") {
        this.map[y][x].sprite.visible = false;
      }
    }
  }
  if (message) {
    this.setGameOverText(message,"",this.score+" POINTS","","");
  }
  else {
    this.setGameOverText("GAME OVER","",this.score+" POINTS","","");
  }
},

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
