// Sssensssible Sssoccer
//
// A Snake version of soccer. Two snakes push a ball around with their heads, trying
// to get it through the goal to score points, dying constantly if they run into walls or each other.

BasicGame.Sssensssible = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Sssensssible.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Sssensssible.prototype.constructor = BasicGame.Sssensssible;


// create
//
// Super + sets some basic variables to control where things appear.

BasicGame.Sssensssible.prototype.create = function () {

  this.CONTROLS_TWO_X = 8;
  this.CONTROLS_TWO_Y = 23;
  this.GAME_TIME_TICK = 0.022;
  this.EXTRA_BODY_PIECES_PER_GOAL = 3;

  this.scoreTwo = 0;
  this.gameTimeElapsed = 0;

  this.map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.resetApple();

  this.gameTimeTicker = this.game.time.create(false);
  this.gameTimeTicker.add(Phaser.Timer.SECOND * this.GAME_TIME_TICK, this.gameTimeTick, this);
  this.gameTimeTicker.start();


  // Name the state for resetting purposes
  this.stateName = "Sssensssible";
};


// createSnake
//
// Super + Creates another snake as the second player

BasicGame.Sssensssible.prototype.createSnake = function() {
  BasicGame.SnakeBaseGame.prototype.createSnake.call(this);

  this.SNAKE_TWO_START_X = this.SNAKE_START_X;
  this.SNAKE_TWO_START_Y = this.WALL_BOTTOM - this.SNAKE_START_Y + this.WALL_TOP + 1;

  this.snakeTwo = new Snake(this.game,this.SNAKE_TWO_START_X,this.SNAKE_TWO_START_Y);
};


// createInput
//
// Super + Add controls for the second snake

BasicGame.Sssensssible.prototype.createInput = function () {
  BasicGame.SnakeBaseGame.prototype.createInput.call(this);

  if (this.game.device.desktop) {
    this.wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.game.input.keyboard.removeKeyCapture(Phaser.Keyboard.W);
    this.game.input.keyboard.removeKeyCapture(Phaser.Keyboard.A);
    this.game.input.keyboard.removeKeyCapture(Phaser.Keyboard.S);
    this.game.input.keyboard.removeKeyCapture(Phaser.Keyboard.D);
  }
  else {
    // AGAIN, oh no how will this work?
    this.swipe = new Swipe(this.game);
    this.swipe.diagonalDisabled = true;
  }
};


// setScoreText
//
// Override to display the two scores

BasicGame.Sssensssible.prototype.setScoreText = function () {
  var scoreString = this.score + " - " + this.scoreTwo;
  if (scoreString.length < this.MAX_SCORE.toString().length) {
    var spacesToAdd = (this.MAX_SCORE.toString().length - scoreString.length)+1;
    scoreString = Array(spacesToAdd).join(" ") + scoreString;
  }
  this.addTextToGrid(this.scoreX-scoreString.length,this.scoreY,[scoreString]);

};


// createControls
//
// Super + Display controls for the second snake

BasicGame.Sssensssible.prototype.createControls = function () {
  BasicGame.SnakeBaseGame.prototype.createControls.call(this);

  var controlsStrings2 = [];
  if (this.game.device.desktop) {
    controlsStrings2 = ["WASD","CONTROLS","SNAKE"];
  }

  else {
    controlsStrings2 = ["SWIPES","CONTROL","SNAKE"];
  }

  this.controlsGroupTwo = this.game.add.group();
  this.addTextToGrid(this.CONTROLS_TWO_X,this.CONTROLS_TWO_Y,controlsStrings2,this.controlsGroupTwo);
},


// update
//
// Just super, but you never know...

BasicGame.Sssensssible.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);

};

// gameTimeTick
//
// Handles how fast the clock moves

BasicGame.Sssensssible.prototype.gameTimeTick = function () {
  this.gameTimeElapsed++;

  this.updateGameTimeText();

  if (this.gameTimeElapsed == 45*60) {
    this.halfTime();
  }
  else if (this.gameTimeElapsed == 90*60) {
    this.fullTime();
  }
  else {
    this.gameTimeTicker.add(Phaser.Timer.SECOND * this.GAME_TIME_TICK, this.gameTimeTick, this);
  }
};


BasicGame.Sssensssible.prototype.halfTime = function () {
  this.hideControls();
  this.hideControlsTwo();
  this.addTextToGrid(7,16,["HALF-TIME"],this.textGroup);
  this.snake.dead = true;
  this.snakeTwo.dead = true;
  this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 30, function () {
    this.gameTimeTicker.add(Phaser.Timer.SECOND * this.GAME_TIME_TICK, this.gameTimeTick, this);
    this.addTextToGrid(7,16,["         "],this.textGroup);
    this.snake.reset();
    this.snakeTwo.reset();
    this.resetApple();
  },this);
};


BasicGame.Sssensssible.prototype.fullTime = function () {
  this.hideControls();
  this.hideControlsTwo();
  this.addTextToGrid(7,16,["FULL-TIME"],this.textGroup);
  this.snake.dead = true;
  this.snakeTwo.dead = true;
};


// tick
//
// Complete override. Does mostly the same things, but ticks the second snake too

BasicGame.Sssensssible.prototype.tick = function () {
  ticker.add(Phaser.Timer.SECOND * this.SNAKE_TICK, this.tick, this);

  this.snake.tick();
  this.snakeTwo.tick();

  // Wrap the snake around the edges
  this.snake.wrap();
  this.snakeTwo.wrap();
  this.wrapApple();

  this.checkBodyCollision();
  this.checkWallCollision();
  this.checkAppleCollision();
};

BasicGame.Sssensssible.prototype.wrapApple = function () {
  if (this.apple.x >= this.game.width) {
    this.head.x = 0;
  }
  else if (this.apple.x < 0) {
    this.apple.x = this.game.width - GRID_SIZE;
  }
  if (this.apple.y < 0) {
    this.apple.y = this.game.height - GRID_SIZE;
  }
  else if (this.apple.y >= this.game.height) {
    this.apple.y = 0;
  }
};

BasicGame.Sssensssible.prototype.updateGameTimeText = function () {
  var m = Math.floor(this.gameTimeElapsed/60);
  var s = (this.gameTimeElapsed - m*60);

  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  this.addTextToGrid(1,this.scoreY,[m + ":" + s]);
};


// checkWallCollission
//
// Complete override because we need to handle one snake being dead but
// not the other

BasicGame.Sssensssible.prototype.checkWallCollision = function () {
  this.wallGroup.forEach(function (wall) {
    if (!this.snake.dead && this.snake.head.position.equals(wall.position)) {
      this.snake.die();
    }
    if (!this.snakeTwo.dead && this.snakeTwo.head.position.equals(wall.position)) {
      this.snakeTwo.die();
    }

    if (this.snake.dead && this.snakeTwo.dead) {
      return;
    }
  },this);
}


// checkBodyCollision
//
// Complete override to handle one dead snake out of two, and to check both
// auto-collision and other-collision

BasicGame.Sssensssible.prototype.checkBodyCollision = function () {
  this.snake.forEach(function (bit) {
    if (!this.snake.dead && this.snake.head.position.equals(bit.position) && bit != this.snake.head) {
      this.snake.die();
    }
    if (!this.snakeTwo.dead && this.snakeTwo.head.position.equals(bit.position)) {
      this.snakeTwo.die();
    }

    if (this.snake.dead && this.snakeTwo.dead) {
      return;
    }
  },this);

  this.snakeTwo.forEach(function (bit) {
    if (!this.snakeTwo.dead && this.snakeTwo.head.position.equals(bit.position) && bit != this.snakeTwo.head) {
      this.snakeTwo.die();
    }
    if (!this.snake.dead && this.snake.head.position.equals(bit.position)) {
      this.snake.die();
    }

    if (this.snake.dead && this.snakeTwo.dead) {
      return;
    }
  },this);
};


BasicGame.Sssensssible.prototype.resetApple = function () {
  this.apple.x = this.SNAKE_START_X * GRID_SIZE;
  this.apple.y = 16 * GRID_SIZE;
};


BasicGame.Sssensssible.prototype.resetSnakes = function () {
  this.snake.reset();
  this.snakeTwo.reset();
};


// checkAppleCollision
//
// This implements the idea of dribbling the ball in the direction of the snake hitting it
// Also checks for goals and various possible collisions that kill the dribbling snake

BasicGame.Sssensssible.prototype.checkAppleCollision = function () {

  if (this.snake.head.position.equals(this.apple.position)) {
    var appleNext = new Phaser.Point(this.apple.x,this.apple.y);
    appleNext.x += this.snake.next.x;
    appleNext.y += this.snake.next.y;

    this.wallGroup.forEach(function (wall) {
      if (wall.position.equals(appleNext)) {
        this.snake.die();
        return;
      }
    },this);

    this.snake.forEach(function (bit) {
      if (bit.position.equals(appleNext)) {
        this.snake.die();
        return;
      }
    },this);

    this.snakeTwo.forEach(function (bit) {
      if (bit.position.equals(appleNext)) {
        this.snake.die();
        return;
      }
    },this);

    if (!this.snake.dead) {
      this.appleSFX.play();
      this.apple.position.x += this.snake.next.x;
      this.apple.position.y += this.snake.next.y;
    }
  }

  if (this.snakeTwo.head.position.equals(this.apple.position)) {
    var appleNext = new Phaser.Point(this.apple.x,this.apple.y);
    appleNext.x += this.snakeTwo.next.x;
    appleNext.y += this.snakeTwo.next.y;

    this.wallGroup.forEach(function (wall) {
      if (wall.position.equals(appleNext)) {
        this.snakeTwo.die();
        return;
      }
    },this);

    this.snake.forEach(function (bit) {
      if (bit.position.equals(appleNext)) {
        this.snakeTwo.die();
        return;
      }
    },this);

    this.snakeTwo.forEach(function (bit) {
      if (bit.position.equals(appleNext)) {
        this.snakeTwo.die();
        return;
      }
    },this);

    if (!this.snakeTwo.dead) {
      this.appleSFX.play();
      this.apple.position.x += this.snakeTwo.next.x;
      this.apple.position.y += this.snakeTwo.next.y;
    }
  }

  // Check for goals
  if (!this.snake.dead && this.apple.position.y < 6*GRID_SIZE && this.apple.position.y > 3*GRID_SIZE && this.apple.position.x >= 8*GRID_SIZE && this.apple.position.x < 16*GRID_SIZE) {
    this.scoreTwo++;
    this.snake.SNAKE_START_LENGTH += this.EXTRA_BODY_PIECES_PER_GOAL;
    this.snakeTwo.SNAKE_START_LENGTH += this.EXTRA_BODY_PIECES_PER_GOAL;
    this.goal();
  }
  else if (!this.snake.dead && this.apple.position.y > 25 * GRID_SIZE && this.apple.position.y < 28 * GRID_SIZE && this.apple.position.x >= 8*GRID_SIZE && this.apple.position.x < 16*GRID_SIZE) {
    this.score++;
    this.snake.SNAKE_START_LENGTH += this.EXTRA_BODY_PIECES_PER_GOAL;
    this.snakeTwo.SNAKE_START_LENGTH += this.EXTRA_BODY_PIECES_PER_GOAL;
    this.goal();
  }
};

BasicGame.Sssensssible.prototype.goal = function () {
  this.setScoreText("");
  this.snake.dead = true;
  this.snakeTwo.dead = true;
  this.goalString = "GOOOOOOOOAAAAAAAAAL!!!";
  this.goalStringIndex = 0;
  this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 0.25, this.goalText, this);
};

BasicGame.Sssensssible.prototype.goalText = function () {
  if (!this.appleSFX.loop) this.appleSFX.loopFull();
  this.addTextToGrid(this.goalStringIndex + 1,16,[this.goalString.charAt(this.goalStringIndex)],this.textGroup);
  this.goalStringIndex++;
  if (this.goalStringIndex < this.goalString.length) {
    this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 0.25, this.goalText, this);
  }
  else {
    this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 15, function () {
      this.resetApple();
      this.resetSnakes();
      this.addTextToGrid(0,16,["                        "],this.textGroup)
      this.appleSFX.stop();
    }, this);
  }
};

// gameOver
//
// Complete override

BasicGame.Sssensssible.prototype.gameOver = function () {

};


// repositionApple
//
// We don't do this, so override to cancel

BasicGame.Sssensssible.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
  // because it's based on the data about the colossus
};


// startAppleTimer
//
// We don't do this, so override to cancel

BasicGame.Sssensssible.prototype.startAppleTimer = function () {
};


// hideControlsTwo
//
// Handle hiding the second set of control instructions

BasicGame.Sssensssible.prototype.hideControlsTwo = function () {
  if (this.snakeTwo.next.x == 0 && this.snakeTwo.next.y == 0) {
    this.controlsGroupTwo.forEach(function (letter) {
      letter.text = '';
    });
    this.controlsGroupTwo.visible = false;
  }
};


// handleKeyboardInput
//
// Handle the second snake's keyboard controls
BasicGame.Sssensssible.prototype.handleKeyboardInput = function () {
  BasicGame.SnakeBaseGame.prototype.handleKeyboardInput.call(this);

  if (this.snakeTwo.dead) return;
  if (!this.inputEnabled) return;

  if (this.controlsGroupTwo.visible && (this.wKey.isDown || this.aKey.isDown || this.sKey.isDown || this.dKey.isDown)) {
    this.hideControlsTwo();
  }

  // Check which key is down and set the next direction appropriately
  if (this.aKey.isDown) {
    this.snakeTwo.moveLeft();
  }
  else if (this.dKey.isDown) {
    this.snakeTwo.moveRight();
  }
  if (this.wKey.isDown) {
    this.snakeTwo.moveUp();
  }
  else if (this.sKey.isDown) {
    this.snakeTwo.moveDown();
  }
};


BasicGame.Sssensssible.prototype.handleTouchInput = function () {
  if (this.snake.dead) return;
  if (!this.inputEnabled) return;

  var input = this.swipe.check();
  if (!input) return;


  if (input.y < this.game.height/2) {
    if (this.controlsGroup.visible) {
      this.hideControls();
      // this.startAppleTimer();
    }

    switch (input.direction) {
      case this.swipe.DIRECTION_LEFT:
      this.snake.moveLeft();
      break;

      case this.swipe.DIRECTION_RIGHT:
      this.snake.moveRight();
      break;

      case this.swipe.DIRECTION_UP:
      this.snake.moveUp();
      break;

      case this.swipe.DIRECTION_DOWN:
      this.snake.moveDown();
      break;
    }
  }


  if (this.snakeTwo.dead) return;
  if (!this.inputEnabled) return;

  if (input.y > this.game.height/2) {
    if (this.controlsGroupTwo.visible) {
      if (this.snake.next.x == 0 && this.snake.next.y == 0) {
        this.controlsGroupTwo.forEach(function (letter) {
          letter.text = '';
        });
        this.controlsGroupTwo.visible = false;
      }    // this.startAppleTimer();
    }

    switch (input.direction) {
      case this.swipe.DIRECTION_LEFT:
      this.snakeTwo.moveLeft();
      break;

      case this.swipe.DIRECTION_RIGHT:
      this.snakeTwo.moveRight();
      break;

      case this.swipe.DIRECTION_UP:
      this.snakeTwo.moveUp();
      break;

      case this.swipe.DIRECTION_DOWN:
      this.snakeTwo.moveDown();
      break;
    }
  }

  this.currentSwipe = null;
};
