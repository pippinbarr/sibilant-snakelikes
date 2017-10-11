BasicGame.Ssshadow = function (game) {
  BasicGame.Snake.call(this,game);
};

BasicGame.Ssshadow.prototype = Object.create(BasicGame.Snake.prototype);
BasicGame.Ssshadow.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Ssshadow.prototype.create = function () {
  BasicGame.Snake.prototype.create.call(this);

  this.colossusData = [
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,0],
    [1,0,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,0,1],
    [1,0,0,1,1,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,2,1,0,1,1,0,0]
  ];

  this.colossusGroup = this.game.add.group();
  for (var y = 0; y < this.colossusData.length; y++) {
    for (var x = 0; x < this.colossusData[y].length; x++) {
      if (this.colossusData[y][x] == 1) {
        var bit = this.game.add.sprite(x * this.GRID_SIZE,y*this.GRID_SIZE,'body');
        this.colossusGroup.add(bit);
      }
      else if (this.colossusData[y][x] == 2) {
        var bit = this.game.add.sprite(x * this.GRID_SIZE,y*this.GRID_SIZE,'apple');
        this.colossusGroup.add(bit);
      }
    }
  }

  this.colossusGroup.x = 12 * this.GRID_SIZE;
  this.colossusGroup.y = 12 * this.GRID_SIZE;

  this.stateName = "Ssshadow";
};

BasicGame.Ssshadow.prototype.update = function () {
  BasicGame.Snake.prototype.update.call(this);
};

BasicGame.Ssshadow.prototype.tick = function () {
  BasicGame.Snake.prototype.tick.call(this);

  this.checkColossusCollision();
}

BasicGame.Ssshadow.prototype.checkAppleCollision = function () {
  if (this.snakeHead.position.equals(this.apple.position)) {

  }
};

BasicGame.Ssshadow.prototype.checkColossusCollision = function () {
  this.snakeBodyGroup.forEach(function (bit) {
    if (this.snakeHead.position.equals(bit.position)) {
      this.die();
      return;
    }
  },this);
};

BasicGame.Ssshadow.prototype.gameOver = function () {
  if (this.ateApple) {
    this.setGameOverText("GAME OVER","","YOU LOSE","","");
  }
  else {
    this.setGameOverText("GAME OVER","",this.score + " POINTS","","");
  }
};
