BasicGame.Sssuper = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Sssuper.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Sssuper.prototype.constructor = BasicGame.Sssuper;

BasicGame.Sssuper.prototype.create = function () {

  this.SNAKE_START_Y = 25; // So hack-y. I'm so so sorry.

  // 1 == WALL
  // 2 == Goomba (apple)
  // 3 == Pipe = wall?

  this.createLevel();

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.snake.head.x -= GRID_SIZE*8;
  this.snake.head.y += GRID_SIZE*4;

  this.world.setBounds(0, 0, this.levelWidth, this.game.height);
  this.camera.follow(this.snake.head);
  this.camera.deadzone = new Phaser.Rectangle(-2*GRID_SIZE,0,this.game.width/3,this.game.height);
  this.textGroup.fixedToCamera = true;

  this.ENEMY_TICK = this.SNAKE_TICK * 4;
  this.enemyTicker = this.game.time.create(false);
  this.enemyTicker.add(Phaser.Timer.SECOND * this.ENEMY_TICK, this.enemyTick, this);
  this.enemyTicker.start();

  // Name the state for resetting purposes
  this.stateName = "Sssuper";
};

BasicGame.Sssuper.prototype.enemyTick = function () {
  this.enemyTicker.add(Phaser.Timer.SECOND * this.ENEMY_TICK, this.enemyTick, this);
  this.snakes.forEach(function (snake) {
    snake.tick();
    if (snake.dead) return;
    if (snake.head.x < this.camera.x || snake.head.y < 0 || snake.head.y >= this.game.height || snake.head.x >= this.levelWidth) {
      this.killSnake(snake);
    }
    this.checkEnemyWallCollisions(snake);
    this.checkEnemyEnemyCollisions(snake);
    this.checkSnakeEnemyCollision(snake);
    this.checkEnemySnakeCollision(snake);
  },this);
};

BasicGame.Sssuper.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  if (this.snake.dead) return;

  this.snakes.forEach(function (snake) {
    this.checkSnakeEnemyCollision(snake);
    this.checkEnemySnakeCollision(snake);
  },this);

  this.checkSnakeAppleCollisions();

  // Check for snake off screen (= death)
  if (this.snake.head.x < this.camera.x || this.snake.head.y < 0 || this.snake.head.y >= this.game.height || this.snake.head.x >= this.levelWidth) {
    this.snake.die();
    this.inputEnabled = false;
    this.game.time.events.add(Phaser.Timer.SECOND * 2, this.gameOver, this);
  }
};

BasicGame.Sssuper.prototype.checkEnemyWallCollisions = function (snake) {
  if (snake.dead) return;
  this.wallGroup.forEach(function (wall) {
    if (snake.dead) return;
    if (snake.head.position.equals(wall.world)) {
      this.killSnake(snake);
    }
  },this);
};

BasicGame.Sssuper.prototype.killSnake = function (snake) {
  snake.die();
  this.game.time.events.add(Phaser.Timer.SECOND * this.ENEMY_TICK * 6, function () {
    this.snakes.remove(snake);
  }, this);
};

BasicGame.Sssuper.prototype.checkSnakeAppleCollisions = function () {
  this.apples.forEach(function (apple) {
    if (this.snake.head.position.equals(apple.world)) {
      this.apples.remove(apple);
      this.addToScore(this.APPLE_SCORE);
      this.snake.bodyPiecesToAdd += this.snake.NEW_BODY_PIECES_PER_APPLE;
      this.appleSFX.play();
      if (apple.world.x > 198*GRID_SIZE) {
        // the final apple
        this.snake.die();
        this.inputEnabled = false;
        this.game.time.events.add(Phaser.Timer.SECOND * 2, this.gameOver, this);
      }
    }
  },this);
};

BasicGame.Sssuper.prototype.checkSnakeEnemyCollision = function (otherSnake) {
  if (this.snake.dead || otherSnake.dead) return;
  otherSnake.bits.forEach(function (bit) {
    if (this.snake.head.position.equals(bit.world)) {
      this.snake.die();
      if (bit == otherSnake.head) {
        this.killSnake(otherSnake);
      }
      this.inputEnabled = false;
      this.game.time.events.add(Phaser.Timer.SECOND * 2, this.gameOver, this);
    }
  },this);
};

BasicGame.Sssuper.prototype.checkEnemySnakeCollision = function (snake) {
  if (this.snake.dead || snake.dead) return;
  this.snake.bits.forEach(function (bit) {
    if (snake.head.world.equals(bit.world)) {
      this.killSnake(snake);
      if (bit == this.snake.head) {
        this.snake.die();
        this.inputEnabled = false;
        this.game.time.events.add(Phaser.Timer.SECOND * 2, this.gameOver, this);
      }
    }
  },this);
};

BasicGame.Sssuper.prototype.checkEnemyEnemyCollisions = function (snake) {
  if (snake.dead) return;
  this.snakes.forEach(function (otherSnake) {
    if (otherSnake == snake) return;
    if (otherSnake.dead) return;
    otherSnake.bits.forEach(function (bit) {
      if (snake.head.position.equals(bit.world)) {
        this.killSnake(snake);
        if (bit == otherSnake.head) {
          this.killSnake(otherSnake);
        }
      }
    },this);
  },this);
};

BasicGame.Sssuper.prototype.checkAppleCollision = function () {
};

BasicGame.Sssuper.prototype.createLevel = function () {

  console.log("createLevel()");
  this.wallGroup = this.game.add.group();

  var mapBitmap = this.game.make.bitmapData(213, 32);
  mapBitmap.draw('mario-map', 0, 0);
  mapBitmap.update();

  this.levelWidth = mapBitmap.width*GRID_SIZE;

  this.apples = this.game.add.group();
  this.snakes = this.game.add.group();

  var black = 0;
  var white = 0;
  var red = 0;
  var yellow = 0;
  for (var x = 0; x < mapBitmap.width; x++) {
    for (var y = 0; y < mapBitmap.height; y++) {
      var pixel = mapBitmap.getPixelRGB(x,y);
      if (pixel.r == 0 && pixel.g == 0 && pixel.b == 0) {
        this.wallGroup.create(x*GRID_SIZE,y*GRID_SIZE,'wall');
      }
      else if (pixel.r == 255 && pixel.g == 0 && pixel.b == 0) {
        this.apples.create(x*GRID_SIZE,y*GRID_SIZE,'apple');
      }
      else if (pixel.r == 255 && pixel.g == 255 && pixel.b == 0) {
        var snake = new Snake(this.game,x,y);
        snake.next = new Phaser.Point(-GRID_SIZE,0);
        this.snakes.add(snake);
      }
    }
  }
};


BasicGame.Sssuper.prototype.createControls = function () {
  this.controls = [];
  var controlsStrings = [];
  // this.CONTROLS_Y -= 4;
  if (this.game.device.desktop) {
    controlsStrings = ["ARROWS","CONTROL","SNAKE"];
  }
  else {
    controlsStrings = ["SWIPES","CONTROL","SNAKE"];
  }

  this.addTextToGrid(this.CONTROLS_X,this.CONTROLS_Y,controlsStrings,this.controls);
};


// Overrides to avoid default behaviour

BasicGame.Sssuper.prototype.createWalls = function () {
};

BasicGame.Sssuper.prototype.repositionApple = function () {
};
