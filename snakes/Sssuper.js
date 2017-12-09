BasicGame.Sssuper = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Sssuper.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Sssuper.prototype.constructor = BasicGame.Sssuper;

BasicGame.Sssuper.prototype.create = function () {

  this.SNAKE_START_Y = 25; // So hack-y. I'm so so sorry.

  this.level = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Top
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // Ground
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // Ground
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // Ground
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // Ground
  ];
  // 1 == WALL
  // 2 == Goomba (apple)
  // 3 == Pipe = wall?

  this.createLevel();

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.snake.head.x -= GRID_SIZE*8;
  this.snake.head.y += GRID_SIZE*2;

  this.world.setBounds(0, 0, (this.level[0].length - 6)*GRID_SIZE, this.game.height);
  this.camera.follow(this.snake.head);
  this.camera.deadzone = new Phaser.Rectangle(0,0,this.game.width/3,this.game.height);
  this.textGroup.fixedToCamera = true;

  this.goomba1 = new Snake(this.game, this.snake.head.x/GRID_SIZE + 19,this.snake.head.y/GRID_SIZE);
  this.game.add.sprite(this.goomba1);
  this.goomba1.next.x = -GRID_SIZE;
  // this.goomba1 = this.game.add.sprite(this.snake.head.x + 19*GRID_SIZE,this.snake.head.y,'apple');
  // this.goomba2 = this.game.add.sprite(40*GRID_SIZE,this.snake.head.y,'apple');
  // this.goomba2Move = GRID_SIZE;

  // this.goombaTicker = this.game.time.create(false);
  // this.goombaTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 4, this.goombaTick, this);
  // this.goombaTicker.start();

  // Name the state for resetting purposes
  this.stateName = "Sssuper";
};

BasicGame.Sssuper.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Sssuper.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);
  this.checkGoombaCollision();

  this.goomba1.tick();
  this.checkGoombaCollision();

  if (this.snake.dead) return;

  if (this.snake.head.x < 0) {
    this.snake.die();
  }
};

BasicGame.Sssuper.prototype.checkGoombaCollision = function () {
  if (this.snake.head.position.equals(this.goomba1.head.position) && !this.snake.dead) {
    this.snake.die();
    this.goomba1.die();
    this.inputEnabled = false;
    this.game.time.events.add(Phaser.Timer.SECOND * 2, this.gameOver, this);
  }
};

BasicGame.Sssuper.prototype.checkAppleCollision = function () {
  if (this.snake.head.position.equals(this.apple.position)) {
    this.apple.active = false;
    this.snake.bodyPiecesToAdd = this.snake.NEW_BODY_PIECES_PER_APPLE;
  }
};

BasicGame.Sssuper.prototype.createLevel = function () {
  this.wallGroup = this.game.add.group();
  for (var y = 0; y < this.level.length; y++) {
    for (var x = 0; x < this.level[y].length; x++) {
      if (this.level[y][x] == 1) {
        var wall = this.wallGroup.create(x*GRID_SIZE,y*GRID_SIZE,'wall');
      }
    }
  }
};

BasicGame.Sssuper.prototype.handleKeyboardInput = function () {
  if (this.rKey.isDown) {
    this.restart();
  }
  else if (this.mKey.isDown) {
    this.gotoMenu();
  }

  if (this.snake.dead) return;
  if (!this.inputEnabled) return;

  if (this.controls && (this.cursors.left.isDown || this.cursors.right.isDown)) {
    this.hideControls();
    this.startAppleTimer();
  }

  // Check which key is down and set the next direction appropriately
  if (this.cursors.right.isDown) {
    this.snake.moveRight();
  }
  else if (this.cursors.left.isDown) {
    this.snake.moveLeft();
  }
};


BasicGame.Sssuper.prototype.handleTouchInput = function () {
  if (this.snake.dead) return;
  if (!this.inputEnabled) return;

  var d = this.swipe.check();
  this.currentSwipe = d;
  if (!d) return;



  switch (d.direction) {
    case this.swipe.DIRECTION_LEFT:
    this.snake.moveLeft();
    if (this.controls) {
      this.hideControls();
    }
    break;

    case this.swipe.DIRECTION_RIGHT:
    this.snake.moveRight();
    if (this.controls) {
      this.hideControls();
    }
    break;
  }
};


// Overrides to avoid default behaviour

BasicGame.Sssuper.prototype.createWalls = function () {
};

// BasicGame.Sssuper.prototype.gameOver = function () {
// };

BasicGame.Sssuper.prototype.repositionApple = function () {
};

BasicGame.Sssuper.prototype.repositionApple = function () {
};
