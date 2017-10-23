BasicGame.Sssensssible = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Sssensssible.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Sssensssible.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Sssensssible.prototype.create = function () {

  this.CONTROLS_TWO_X = 8;
  this.CONTROLS_TWO_Y = 23;


  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.apple.x = this.snake.head.x;
  this.apple.y = 16 * GRID_SIZE;

  // Name the state for resetting purposes
  this.stateName = "Sssensssible";
};

BasicGame.Sssensssible.prototype.createWalls = function () {
  // Create the walls
  this.wallGroup = this.game.add.group();
  for (var y = this.WALL_TOP; y <= this.WALL_BOTTOM; y++) {
    for (var x = this.WALL_LEFT; x <= this.WALL_RIGHT; x++) {
      if (y == this.WALL_TOP || y == this.WALL_BOTTOM || x == this.WALL_LEFT || x == this.WALL_RIGHT) {
        if ((y == this.WALL_TOP || y == this.WALL_BOTTOM) && x > this.WALL_LEFT + 7 && x < this.WALL_RIGHT - 7) {
          continue;
        }
        var wall = this.wallGroup.create(x*GRID_SIZE,y*GRID_SIZE,'wall');
      }
    }
  }
},

BasicGame.Sssensssible.prototype.createSnake = function() {
  BasicGame.SnakeBaseGame.prototype.createSnake.call(this);

  this.SNAKE_TWO_START_X = this.SNAKE_START_X;
  this.SNAKE_TWO_START_Y = this.WALL_BOTTOM - this.SNAKE_START_Y + this.WALL_TOP + 1;

  this.snakeTwo = new Snake(this,this.SNAKE_TWO_START_X,this.SNAKE_TWO_START_Y);
};

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
  this.next = new Phaser.Point(0,0);
};

BasicGame.Sssensssible.prototype.createControls = function () {
  BasicGame.SnakeBaseGame.prototype.createControls.call(this);

  var controlsStrings2 = [];
  if (this.game.device.desktop) {
    controlsStrings = ["WASD","CONTROLS","SNAKE"];
  }

  else {
    controlsStrings = ["SWIPES","CONTROL","SNAKE"];
  }

  this.controlsGroupTwo = this.game.add.group();
  this.addTextToGrid(this.CONTROLS_TWO_X,this.CONTROLS_TWO_Y,controlsStrings,this.controlsGroupTwo);
},

BasicGame.Sssensssible.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Sssensssible.prototype.tick = function () {
  ticker.add(Phaser.Timer.SECOND * this.SNAKE_TICK, this.tick, this);

  this.snake.tick();
  this.snakeTwo.tick();

  this.checkAppleCollision();
  this.checkBodyCollision();
  this.checkWallCollision();
};

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

BasicGame.Sssensssible.prototype.checkBodyCollision = function () {
  this.snake.forEach(function (bit) {
    if (!this.snake.dead && this.snake.head.position.equals(bit.position) && !bit == this.snake.head) {
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
    if (!this.snake.dead && this.snake.head.position.equals(bit.position)) {
      this.snake.die();
    }
    if (!this.snakeTwo.dead && this.snakeTwo.head.position.equals(bit.position) && !bit == this.snakeTwo.head) {
      this.snakeTwo.die();
    }

    if (this.snake.dead && this.snakeTwo.dead) {
      return;
    }
  },this);
};

BasicGame.Sssensssible.prototype.checkAppleCollision = function () {
  if (this.snake.head.position.equals(this.apple.position)) {
    this.appleSFX.play();
    this.apple.position.x += this.snake.next.x*2;
    this.apple.position.y += this.snake.next.y*2;
  }

  if (this.snakeTwo.head.position.equals(this.apple.position)) {
    this.appleSFX.play();
    this.apple.position.x += this.snakeTwo.next.x*2;
    this.apple.position.y += this.snakeTwo.next.y*2;
  }

};

BasicGame.Sssensssible.prototype.gameOver = function () {

};

BasicGame.Sssensssible.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
  // because it's based on the data about the colossus
};

BasicGame.Sssensssible.prototype.startAppleTimer = function () {
};

BasicGame.Sssensssible.prototype.hideControlsTwo = function () {
  if (this.snakeTwo.next.x == 0 && this.snakeTwo.next.y == 0) {
    this.controlsGroupTwo.forEach(function (letter) {
      letter.text = '';
    });
    this.controlsGroupTwo.visible = false;
  }
};

BasicGame.Sssensssible.prototype.handleKeyboardInput = function () {
  BasicGame.SnakeBaseGame.prototype.handleKeyboardInput.call(this);

  if (this.dead) return;
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
