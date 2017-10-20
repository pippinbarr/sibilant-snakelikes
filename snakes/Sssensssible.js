BasicGame.Sssensssible = function (game) {
  BasicGame.Snake.call(this,game);
};

BasicGame.Sssensssible.prototype = Object.create(BasicGame.Snake.prototype);
BasicGame.Sssensssible.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Sssensssible.prototype.create = function () {

  BasicGame.Snake.prototype.create.call(this);

  this.nextTwo = new Phaser.Point(0,0);

  this.SNAKE_TWO_START_X = this.SNAKE_START_X;
  this.SNAKE_TWO_START_Y = this.WALL_BOTTOM - this.SNAKE_START_Y + this.WALL_TOP;

  this.CONTROLS_TWO_X = 8;
  this.CONTROLS_TWO_Y = 22;

  this.bodyPiecesToAddTwo = 4;

  this.createSnakeTwo();
  this.createControlsTwo();

  // Name the state for resetting purposes
  this.stateName = "Sssensssible";
};

BasicGame.Sssensssible.prototype.createSnakeTwo = function() {
  this.snakeTwo = [];
  this.snakeTwoBodyGroup = this.game.add.group();
  this.snakeTwoHead = this.game.add.sprite(this.SNAKE_TWO_START_X*this.GRID_SIZE,this.SNAKE_TWO_START_Y*this.GRID_SIZE,'head');
  this.game.physics.enable(this.snakeTwoHead, Phaser.Physics.ARCADE);
  this.snakeTwo.unshift(this.snakeTwoHead);

  this.snakeTwoBitsToAdd = this.SNAKE_START_LENGTH;
};

BasicGame.Sssensssible.prototype.createInput = function () {
  BasicGame.Snake.prototype.createInput.call(this);

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


BasicGame.Sssensssible.prototype.createControlsTwo = function () {
  var controlsStrings = [];
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
  BasicGame.Snake.prototype.update.call(this);
};

BasicGame.Sssensssible.prototype.tick = function () {

  this.prevTwo = new Phaser.Point(this.next.x,this.next.y);

  BasicGame.Snake.prototype.tick.call(this);
};

BasicGame.Sssensssible.prototype.addSnakeBits = function () {
  BasicGame.Snake.prototype.addSnakeBits.call(this);

  if (this.nextTwo.x == 0 && this.nextTwo.y == 0) return;

  if (this.snakeTwoBitsToAdd > 0) {
    var bit = this.snakeTwoBodyGroup.create(0,0,'body');
    this.game.physics.enable(bit,Phaser.Physics.ARCADE);
    this.snakeTwo.unshift(bit)
    this.snakeTwoBitsToAdd = Math.max(0,this.snakeTwoBitsToAdd-1);
  }
};

BasicGame.Sssensssible.prototype.updateSnakePosition = function () {
  BasicGame.Snake.prototype.updateSnakePosition.call(this);

  if (this.nextTwo.x == 0 && this.nextTwo.y == 0) {
    return;
  }

  this.moveSFX.play();

  // Move every snake bit up by one
  for (var i = 0; i < this.snakeTwo.length - 1; i++) {
    this.snakeTwo[i].x = this.snakeTwo[i+1].x;
    this.snakeTwo[i].y = this.snakeTwo[i+1].y;
  }

  // Move the snake head
  this.snakeTwoHead.x += this.nextTwo.x;
  this.snakeTwoHead.y += this.nextTwo.y;

  // Wrap
  if (this.snakeTwoHead.x >= this.game.width) {
    this.snakeTwoHead.x = 0;
  }
  else if (this.snakeTwoHead.x < 0) {
    this.snakeTwoHead.x = this.game.width - this.GRID_SIZE;
  }
  if (this.snakeTwoHead.y >= this.game.height) {
    this.snakeTwoHead.y = 0;
  }
  else if (this.snakeTwoHead.y < 0) {
    this.snakeTwoHead.y = this.game.height - this.GRID_SIZE;
  }
};


BasicGame.Sssensssible.prototype.checkAppleCollision = function () {
  // Check if the snake's head is over the apple
  // We use world position because the apple is in a group
  if (this.snakeHead.position.equals(this.apple.world)) {

  }
};

BasicGame.Sssensssible.prototype.gameOver = function () {

};

BasicGame.Sssensssible.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
  // because it's based on the data about the colossus
};

BasicGame.Sssensssible.prototype.handleKeyboardInput = function () {
  BasicGame.Snake.prototype.handleKeyboardInput.call(this);

  if (this.dead) return;
  if (!this.inputEnabled) return;

  if (this.controlsTwoVisible && (this.wKey.isDown || this.aKey.isDown || this.sKey.isDown || this.dKey.isDown)) {
    this.hideControls();
    this.startAppleTimer();
  }

  // Check which key is down and set the next direction appropriately
  if (this.aKey.isDown) {
    this.leftTwo();
  }
  else if (this.dKey.isDown) {
    this.rightTwo();
  }
  if (this.wKey.isDown) {
    this.upTwo();
  }
  else if (this.sKey.isDown) {
    this.downTwo();
  }
};

BasicGame.Sssensssible.prototype.leftTwo = function () {
  if (this.prevTwo.x == 0) this.nextTwo = new Phaser.Point(-this.GRID_SIZE,0);
};

BasicGame.Sssensssible.prototype.rightTwo = function () {
  if (this.prevTwo.x == 0) this.nextTwo = new Phaser.Point(this.GRID_SIZE,0);
};

BasicGame.Sssensssible.prototype.upTwo = function () {
  if (this.prevTwo.y == 0) this.nextTwo = new Phaser.Point(0,-this.GRID_SIZE);
};

BasicGame.Sssensssible.prototype.downTwo = function () {
  if (this.prevTwo.y == 0) this.nextTwo = new Phaser.Point(0,this.GRID_SIZE);
};
