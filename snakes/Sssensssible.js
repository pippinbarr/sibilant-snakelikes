BasicGame.Sssensssible = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Sssensssible.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Sssensssible.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Sssensssible.prototype.create = function () {

  this.CONTROLS_TWO_X = 8;
  this.CONTROLS_TWO_Y = 22;


  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.nextTwo = new Phaser.Point(0,0);

  // Name the state for resetting purposes
  this.stateName = "Sssensssible";
};

BasicGame.Sssensssible.prototype.createSnake = function() {
  BasicGame.SnakeBaseGame.prototype.createSnake.call(this);

  this.SNAKE_TWO_START_X = this.SNAKE_START_X;
  this.SNAKE_TWO_START_Y = this.WALL_BOTTOM - this.SNAKE_START_Y + this.WALL_TOP;

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
    // Oh no, how can I have two player on mobile? I can't!
    // Would have to have an AI
  }

  this.addTextToGrid(this.CONTROLS_TWO_X,this.CONTROLS_TWO_Y,controlsStrings,this.controlsGroup);
  this.controlsVisible = true;
},

BasicGame.Sssensssible.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Sssensssible.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  this.snakeTwo.tick();
};

BasicGame.Sssensssible.prototype.gameOver = function () {

};

BasicGame.Sssensssible.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
  // because it's based on the data about the colossus
};

BasicGame.Sssensssible.prototype.handleKeyboardInput = function () {
  BasicGame.SnakeBaseGame.prototype.handleKeyboardInput.call(this);

  if (this.dead) return;
  if (!this.inputEnabled) return;

  if (this.controlsTwoVisible && (this.wKey.isDown || this.aKey.isDown || this.sKey.isDown || this.dKey.isDown)) {
    this.hideControls();
    this.startAppleTimer();
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
