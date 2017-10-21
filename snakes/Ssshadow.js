BasicGame.Ssshadow = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Ssshadow.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Ssshadow.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Ssshadow.prototype.create = function () {

  // this.SNAKE_START_LENGTH = 40;

  BasicGame.SnakeBaseGame.prototype.create.call(this);

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

  // Chance that the colossus will move in a tick
  this.colossusMoveChance = 0.05;

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
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Ssshadow.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  if (!this.dead) {
    this.colossusMove();
    this.checkColossusCollision();
  }
}

BasicGame.Ssshadow.prototype.colossusMove = function () {

  // Only move sometimes
  if (Math.random() > this.colossusMoveChance) return;

  // Generate a random move in both directions
  var move = {
    x: Math.floor(-1 + Math.random() * 3) * this.GRID_SIZE,
    y: Math.floor(-1 + Math.random() * 3) * this.GRID_SIZE
  };

  // If colossus would move on both axes, zero one out so it moves
  // like the snake does (no diagonals)
  if (move.x != 0 && move.y != 0) {
    if (Math.random() < 0.5) move.x = 0;
    else move.y = 0;
  }

  var canMove = true;

  // Go through every bit in the colossus to check collisions
  this.colossus.forEach(function (colossusBit) {
    // Calculate the position this bit in the colossus would be in if you moved it up
    var newPosition = colossusBit.world.clone();
    newPosition.x += move.x;
    newPosition.y += move.y;

    // Go through every bit in the snake
    this.snake.forEach(function (snakeBit) {
      // Check if the colossus would hit it, if so fail
      if (snakeBit.world.equals(newPosition)) {
        canMove = false;
        return;
      }
    },this);

    // If we found the colossus can't move, escape out
    if (!canMove) return;
    // Go through every bit in the walls
    this.wallGroup.forEach(function (wallBit) {
      // Check if the colossus would hit it, if so fail
      if (wallBit.world.equals(newPosition)) {
        canMove = false;
        return;
      }
    },this);

    // If we found the colossus can't move, escape out
    if (!canMove) return;
  },this);

  // Check if the colossus can actually move after all that
  if (canMove) {
    // Move it!
    this.colossus.x += move.x;
    this.colossus.y += move.y;
  }
};

BasicGame.Ssshadow.prototype.checkAppleCollision = function () {
  // Check if the snake's head is over the apple
  // We use world position because the apple is in a group
  if (this.snakeHead.position.equals(this.apple.world)) {
    // Play the sound
    this.appleSFX.play();
    // Increase snake size
    this.snakeBitsToAdd += this.NEW_BODY_PIECES_PER_APPLE;
    // Create a replace bit so that after the apple gets eaten the colossus
    // has a body tile at that location from then on
    var replacementBit = this.game.add.sprite(this.apple.x,this.apple.y,'body');
    this.colossus.add(replacementBit);
    this.colossusBits[this.currentAppleBitPosition.y][this.currentAppleBitPosition.x] = replacementBit;

    // Increment the apple index
    this.currentAppleIndex++;
    // Check if that was the final apple or not
    if (this.currentAppleIndex > this.FINAL_APPLE_INDEX) {
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
