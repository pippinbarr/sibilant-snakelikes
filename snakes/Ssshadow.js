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

  // An array to store a representation of the colossus matching the data
  // but with the actual tiles in it
  this.colossusBits = [];

  // Tracking which apple we're up to
  this.FINAL_APPLE_INDEX = 6;
  this.currentAppleIndex = 2;
  this.currentAppleBitPosition = {
    x:-1,
    y: -1
  }

  // The colossus will be represented as a group
  this.colossus = this.game.add.group();

  // Go through the data for the colossus and add the appropriate tiles
  // in the appropriate locations to the colossusGroup
  for (var y = 0; y < this.colossusData.length; y++) {
    this.colossusBits.push([]);
    for (var x = 0; x < this.colossusData[y].length; x++) {
      var bit = null;
      if (this.colossusData[y][x] == 2) {
        // If this is the first apple, then add an apple at that location
        this.apple.x = x * this.GRID_SIZE;
        this.apple.y = y * this.GRID_SIZE,'apple';
        this.colossus.add(this.apple);
        // Track the apple
        this.currentAppleBitPosition.x = x;
        this.currentAppleBitPosition.y = y;
        // We don't add the apple to colossus bits, since it's temporary
      }
      else if (this.colossusData[y][x] > 0) {
        // If this is either a bit of body or a future apple site, add a body tile
        bit = this.game.add.sprite(x * this.GRID_SIZE,y*this.GRID_SIZE,'body');
        this.colossusBits[y][x] = bit;
      }

      // If a bit was created, we add it to the main group that makes up the colossus
      if (bit) {
        this.colossus.add(bit);
      }

      // Add this bit (even if null) to the 2D array representation of the colossus
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

  this.colossusMove();
  this.checkColossusCollision();
}

BasicGame.Ssshadow.prototype.colossusMove() = function () {

};

BasicGame.Ssshadow.prototype.checkAppleCollision = function () {
  // Check if the snake's head is over the apple
  // We use world position because the apple is in a group
  if (this.snakeHead.position.equals(this.apple.world)) {
    // Play the sound
    this.appleSFX.play();
    // Create a replace bit so that after the apple gets eaten the colossus
    // has a body tile at that location from then on
    var replacementBit = this.game.add.sprite(this.apple.x,this.apple.y,'body');
    this.colossus.add(replacementBit);
    this.colossusBits[this.currentAppleBitPosition.y][this.currentAppleBitPosition.x] = replacementBit;

    // Increment the apple index
    this.currentAppleIndex++;
    // Check if that was the final apple or not
    if (this.currentAppleIndex > this.MAX_APPLE_INDEX) {
      // That was the final apple!
      console.log("You defeated the colossus!")
    }
    else {
      // If wasn't the final apple so we go through the colossus data to find
      // the the location of the nexxt apple
      for (var y = 0; y < this.colossusData.length; y++) {
        for (var x = 0; x < this.colossusData[y].length; x++) {
          if (this.colossusData[y][x] == this.currentAppleIndex) {
            // Get rid of the tile at that location
            this.colossusBits[y][x].destroy();
            // Move the apple to that location
            this.apple.position.x = (x * this.GRID_SIZE);
            this.apple.position.y = (y * this.GRID_SIZE);
            // Store the location in the colossusBits of the apple
            this.currentAppleBitPosition.x = x;
            this.currentAppleBitPosition.y = y;
            // Having positioned the apple, we can exit
            return;
          }
        }
      }
    }
  }
};

BasicGame.Ssshadow.prototype.checkColossusCollision = function () {
  // Go through all the colossus elements
  this.colossus.forEach(function (bit) {
    // Check if there's a collision was with a body tile (not the apple)
    if (this.snakeHead.position.equals(bit.world) && bit != this.apple) {
      // Death if so
      this.die();
      return;
    }
  },this);
};

BasicGame.Ssshadow.prototype.gameOver = function () {

};


BasicGame.Ssshadow.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
  // because it's based on the data about the colossus
};
