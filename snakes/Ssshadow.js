BasicGame.Ssshadow = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Ssshadow.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Ssshadow.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Ssshadow.prototype.create = function () {

  // this.SNAKE_START_LENGTH = 40;

  // The colossus will be represented as a group
  this.colossus = this.game.add.group();

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

  this.createColossus();

  // To store the snakes the colossus turns into
  this.colossusSnakes = this.game.add.group();

  this.COLOSSUS_TICK = this.SNAKE_TICK * 9;
  this.colossusTicker = this.game.time.create(false);
  this.colossusTicker.add(Phaser.Timer.SECOND * this.COLOSSUS_TICK, this.colossusTick, this);

  // Name the state for resetting purposes
  this.stateName = "Ssshadow";
};

BasicGame.Ssshadow.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Ssshadow.prototype.colossusTick = function () {
  this.colossusTicker.add(Phaser.Timer.SECOND * this.COLOSSUS_TICK, this.colossusTick, this);

  if (!this.snake.dead) {
    this.colossusMove();
  }
};

BasicGame.Ssshadow.prototype.tick = function () {

  if (!this.snake.dead) {
    this.checkColossusCollision();
  }

  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  if (this.snake.dead) {
    this.colossusSnakes.forEach(function (snake) {
      snake.grow();
      snake.chaseLinear();
      snake.move();
      if (snake.target.position.equals(snake.head.position)) {
        var bit = snake.bits.shift();
        if (bit) {
          bit.visible = false;
        }
      }
    },this);
  }
};

BasicGame.Ssshadow.prototype.createColossus = function () {

  // Go through the data for the colossus and add the appropriate tiles
  // in the appropriate locations to the colossusGroup
  for (var y = 0; y < this.colossusData.length; y++) {
    this.colossusBits.push([]);
    for (var x = 0; x < this.colossusData[y].length; x++) {
      var bit = null;
      if (this.colossusData[y][x] == 2) {
        // If this is the first apple, then add an apple at that location
        this.apple.x = x * GRID_SIZE;
        this.apple.y = y * GRID_SIZE;
        this.colossus.add(this.apple);
        // Track the apple
        this.currentAppleBitPosition.x = x;
        this.currentAppleBitPosition.y = y;
        // We don't add the apple to colossus bits, since it's temporary
      }
      else if (this.colossusData[y][x] > 0) {
        // If this is either a bit of body or a future apple site, add a body tile
        bit = this.game.add.sprite(x * GRID_SIZE,y*GRID_SIZE,'body');
        this.colossusBits[y][x] = bit;

        // this.colossus.create(x * GRID_SIZE,y*GRID_SIZE,'body');
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
  this.colossus.x = 12 * GRID_SIZE;
  this.colossus.y = 12 * GRID_SIZE;
};

BasicGame.Ssshadow.prototype.colossusMove = function () {

  var moves = [
    {x:GRID_SIZE,y:0},
    {x:-GRID_SIZE,y:0},
    {x:0,y:GRID_SIZE},
    {x:0,y:-GRID_SIZE}
  ]

  var legalMoves = [];
  moves.forEach(function (move) {
    if (this.checkColossusMove(move)) {
      legalMoves.push(move);
    }
  },this);

  if (legalMoves.length == 0) return;

  var move = legalMoves[Math.floor(Math.random() * legalMoves.length)];

  this.colossus.x += move.x;
  this.colossus.y += move.y;
};

BasicGame.Ssshadow.prototype.checkColossusMove = function (move) {
  var canMove = true;

  // Go through every bit in the colossus to check collisions
  this.colossus.forEach(function (colossusBit) {
    if (!canMove) return;

    // Calculate the position this bit in the colossus would be in if you moved it up
    var newPosition = new Phaser.Point(colossusBit.world.x,colossusBit.world.y);
    newPosition.x += move.x;
    newPosition.y += move.y;

    // Go through every bit in the snake
    this.snake.forEach(function (snakeBit) {
      // Check if the colossus would hit it, if so fail
      if (snakeBit == this.snake.head) {
        return;
      }
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

  return canMove;
}

BasicGame.Ssshadow.prototype.checkAppleCollision = function () {
  // Check if the snake's head is over the apple
  // We use world position because the apple is in a group
  if (!this.snake.dead && this.snake.head.position.equals(this.apple.world)) {
    // Play the sound
    this.appleSFX.play();
    // Increase snake size
    this.snakeBitsToAdd += this.NEW_BODY_PIECES_PER_APPLE;
    // Create a replace bit so that after the apple gets eaten the colossus
    // has a body tile at that location from then on
    // var replacementBit = this.game.add.sprite(this.apple.x,this.apple.y,'body');
    // this.colossus.add(replacementBit);
    // this.colossusBits[this.currentAppleBitPosition.y][this.currentAppleBitPosition.x] = replacementBit;

    // Increment the apple index
    this.currentAppleIndex++;
    // Check if that was the final apple or not
    if (this.currentAppleIndex > this.FINAL_APPLE_INDEX && !this.snake.dead) {
      // That was the final apple!
      this.gameWon();
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
            this.apple.position.x = (x * GRID_SIZE);
            this.apple.position.y = (y * GRID_SIZE);
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
    if (this.snake.head.world.equals(bit.world) && bit != this.apple) {
      // Death if so
      this.die();
      return;
    }
  },this);
};

BasicGame.Ssshadow.prototype.hideControls = function () {
  BasicGame.SnakeBaseGame.prototype.hideControls.call(this);
  this.colossusTicker.start();
}

BasicGame.Ssshadow.prototype.gameOver = function () {
  this.setGameOverText("GAME OVER","",this.score+" POINTS","","");
};

BasicGame.Ssshadow.prototype.gameWon = function () {
  this.snake.dead = true;

  this.game.time.events.add(Phaser.Timer.SECOND * 2, function () {
    this.setGameOverText("GAME OVER","",this.score+" POINTS","","");
  }, this);

  this.colossus.forEach(function (bit) {
    if (!bit) return;
    this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * Math.floor(Math.random() * 10), function () {
      var snake = new Snake(this.game,bit.world.x/GRID_SIZE,bit.world.y/GRID_SIZE);
      snake.setTint(0x444444);
      snake.alpha = 0.75;
      snake.target = this.snake.head;
      this.colossusSnakes.add(snake);
      bit.visible = false;
    },this);
  },this);
}


BasicGame.Ssshadow.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
  // because it's based on the data about the colossus
};
