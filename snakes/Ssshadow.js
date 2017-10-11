BasicGame.Ssshadow = function (game) {
  BasicGame.Snake.call(this,game);
};

BasicGame.Ssshadow.prototype = Object.create(BasicGame.Snake.prototype);
BasicGame.Ssshadow.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Ssshadow.prototype.create = function () {
  BasicGame.Snake.prototype.create.call(this);

  // Data to represent the colossus by creating it out of tiles
  // This will let me specify where the target points are so that they
  // can be "apples" at the right time, too.
  this.colossusData = [
    [0,0,0,0,6,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,0],
    [1,0,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,0,1],
    [1,0,0,1,1,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [4,0,0,0,1,0,0,0,5],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,2,1,0,1,3,0,0]
  ];
  this.colossusBits = [];
  this.FINAL_APPLE_INDEX = 6;
  this.currentAppleIndex = 2;

  // The colossus will be represented as a group
  this.colossus = this.game.add.group();

  // Go through the data for the colossus and add the appropriate tiles
  // in the appropriate locations to the colossusGroup
  for (var y = 0; y < this.colossusData.length; y++) {
    this.colossusBits.push([]);
    for (var x = 0; x < this.colossusData[y].length; x++) {
      var bit = null;
      if (this.colossusData[y][x] == 2) {
        this.apple.x = x * this.GRID_SIZE;
        this.apple.y = y * this.GRID_SIZE,'apple';
        this.colossus.add(this.apple);
      }
      else if (this.colossusData[y][x] > 0) {
        bit = this.game.add.sprite(x * this.GRID_SIZE,y*this.GRID_SIZE,'body');
        this.colossusBits[y][x] = bit;
      }

      if (bit) {
        this.colossus.add(bit);
      }

      this.colossusBits[y].push(bit);
    }
  }

  // Move the entire colossus group to a starting position
  this.colossus.x = 12 * this.GRID_SIZE;
  this.colossus.y = 12 * this.GRID_SIZE;

  // Name the state for resetting purposes
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
  if (this.snakeHead.position.equals(this.apple.world)) {
    this.appleSFX.play();
    this.currentAppleIndex++;
    if (this.currentAppleIndex > this.MAX_APPLE_INDEX) {
      // That was the final apple!
      console.log("You defeated the colossus!")
    }
    else {
      for (var y = 0; y < this.colossusData.length; y++) {
        for (var x = 0; x < this.colossusData[y].length; x++) {
          if (this.colossusData[y][x] == this.currentAppleIndex) {
            this.colossusBits[y][x].destroy();
            this.apple.position.x = (x * this.GRID_SIZE);
            this.apple.position.y = (y * this.GRID_SIZE);
          }
        }
      }
    }
  }
};

BasicGame.Ssshadow.prototype.checkColossusCollision = function () {
  this.colossus.forEach(function (bit) {
    if (this.snakeHead.position.equals(bit.world)) {
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


BasicGame.Ssshadow.prototype.repositionApple = function () {

};
