BasicGame.Papersss = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Papersss.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Papersss.prototype.constructor = BasicGame.Papersss;

BasicGame.Papersss.prototype.create = function () {

  this.SNAKE_START_Y = 25; // So hack-y. I'm so so sorry.
  this.map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  this.SNAKE_START_Y = 18;
  this.immigrantGroup = this.game.add.group();


  BasicGame.SnakeBaseGame.prototype.create.call(this);

  // this.game.sound.mute = true;

  // this.snake.y = (this.WALL_BOTTOM)*GRID_SIZE;

  this.apples = this.game.add.group();
  // this.apples.create((this.WALL_LEFT + 3) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');


  // Create the update tick
  this.SLOW_TICK = this.SNAKE_TICK * 3;
  this.FAST_TICK = this.SNAKE_TICK * 0.5;
  this.IMMIGRANT_TICK = this.SNAKE_TICK;
  this.immigrantTicker = this.game.time.create(false);
  this.immigrantTicker.add(Phaser.Timer.SECOND * this.IMMIGRANT_TICK, this.immigrantTick, this);
  this.immigrantTicker.start();

  this.immigrant = null;

  this.generateRules();
  this.displayRules();
  this.DIFFICULTY_INCREMENT = 0.0125;
  this.chanceForNewRules = 0.02;

  this.NEXT_IMMIGRANT_DELAY_TICKS = 30;

  // Name the state for resetting purposes
  this.stateName = "Papersss";
};

BasicGame.Papersss.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Papersss.prototype.hideControls = function () {
  BasicGame.SnakeBaseGame.prototype.hideControls.call(this);
  this.createImmigrant();
};

BasicGame.Papersss.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  this.checkSnakeImmigrantCollision();

  if (this.snake.dead) return;
  if (this.snake.head.x < 0 || this.snake.head.x >= this.game.width || this.snake.head.y < 0 || this.snake.head.y >= this.game.height) {
    this.snake.die();
    if (this.immigrant) this.immigrant.stop();
    this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 10,this.gameOver,this);
  }
};

BasicGame.Papersss.prototype.immigrantTick = function () {
  this.immigrantTicker.add(Phaser.Timer.SECOND * this.IMMIGRANT_TICK, this.immigrantTick, this);

  if (this.immigrant == null) {
    return;
  }

  if (this.immigrant.dead) {
    this.immigrant.flash();
    return;
  }

  if (this.immigrant.target) this.immigrant.chaseLinear();
  this.immigrant.grow();
  this.immigrant.move();

  if (this.immigrant.target != null && this.immigrant.head.position.equals(this.immigrant.target.position)) {
    if (this.checkRules()) {
      this.addToScore(this.APPLE_SCORE);
      this.chanceForNewRules += this.DIFFICULTY_INCREMENT;
      this.appleSFX.play();
    }
    else {
      this.addToScore(-this.APPLE_SCORE);
      this.appleSFX.play();
    }
    this.immigrant.target = null;
    this.immigrant.next.x = GRID_SIZE;
  } else if (this.immigrant.target == null && this.immigrant.head.x > this.game.width + this.immigrant.length*GRID_SIZE) {
    this.resetImmigrant();
  }

  this.checkSnakeImmigrantCollision();
};

BasicGame.Papersss.prototype.checkAppleCollision = function () {
  // this.apples.forEach(function (apple) {
  //   if (this.snake.head.position.equals(apple.position)) {
  //     this.apples.remove(apple);
  //     this.snake.bodyPiecesToAdd = this.snake.NEW_BODY_PIECES_PER_APPLE;
  //   }
  // },this);
};

BasicGame.Papersss.prototype.checkWallCollision = function () {
  if (this.snake.dead) return;
  this.wallGroup.forEach(function (wall) {
    if (this.snake.head.position.equals(wall.position) && !this.snake.dead) {
      this.snake.die();
      if (this.immigrant) this.immigrant.stop();
      this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 10,this.gameOver,this);
      return;
    }
  },this);
},

BasicGame.Papersss.prototype.checkSnakeImmigrantCollision = function () {

  if (!this.immigrant) return;

  if (this.immigrant.dead || this.snake.dead) return;
  // if (this.immigrant.dead || this.snake.dead) return;

  this.immigrant.forEach(function (bit) {
    if (this.snake.head.position.equals(bit.world)) {
      this.snake.die();
      this.immigrant.stop();
      this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 12,this.gameOver,this);
      if (bit == this.immigrant.head) {
        this.immigrant.die();
      }
    }
  },this);

  if (this.immigrant.dead || this.snake.dead) return;

  this.snake.forEach(function (bit) {
    if (this.immigrant.head.position.equals(bit.world)) {
      this.immigrant.die();
      if (bit == this.snake.head) {
        this.snake.die();
        // this.immigrant.stop();
        this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 12,this.gameOver,this);
      }
      else {
        if (this.checkRules()) {
          this.addToScore(-this.APPLE_SCORE);
        }
        else {
          this.addToScore(this.APPLE_SCORE);
          this.chanceForNewRules += this.DIFFICULTY_INCREMENT;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 12,this.resetImmigrant,this);
      }
    }
  },this);
};






BasicGame.Papersss.prototype.resetImmigrant = function () {
  // if (!this.immigrant.target) return;

  if (this.snake.dead) return;

  // Need to start a new immigrant after a delay
  // this.game.time.events.add(Phaser.Timer.SECOND * this.IMMIGRANT_TICK * 5,function () {
    // if (!this.immigrant) return;

    if (this.immigrant.target) this.immigrant.target.destroy();
    this.immigrant.target = null;

    this.immigrant.destroy();
    this.immigrant = null;

    if (Math.random() < this.chanceForNewRules) {
      this.generateRules();
      this.displayRules();
    }
  // },this);
  // if (!this.immigrant) return;

  this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * this.NEXT_IMMIGRANT_DELAY_TICKS,function () {
    if (this.immigrant == null) {
      this.createImmigrant();
    }
  },this);
};


BasicGame.Papersss.prototype.checkRules = function () {
  var speed = "NORMAL";
  if (this.IMMIGRANT_TICK == this.FAST_TICK) {
    speed = "FAST";
  }
  else if (this.IMMIGRANT_TICK == this.SLOW_TICK) {
    speed = "SLOW";
  }

  var color = "";
  if (this.immigrant.head.tint == 0xff0000) {
    color = "RED";
  }
  else if (this.immigrant.head.tint == 0x00ff00) {
    color = "GREEN";
  }
  else {
    color = "BLUE";
  }

  var length = "NORMAL";
  if (this.immigrant.length < this.snake.SNAKE_START_LENGTH+1) {
    length = "SHORT";
  }
  else if (this.immigrant.length > this.snake.SNAKE_START_LENGTH+1) {
    length = "LONG";
  }

  correct = true;
  if (this.speedRule.quality != "ANY") {
    if ((speed == this.speedRule.quality && this.speedRule.number == "NO") || (speed != this.speedRule.quality && this.speedRule.number == "ONLY")) {
      correct = false;
    }
  }
  if (this.colourRule.quality != "ANY") {
    if ((color == this.colourRule.quality && this.colourRule.number == "NO") || (color != this.colourRule.quality && this.colourRule.number == "ONLY")) {
      correct = false;
    }
  }
  if (this.lengthRule.quality != "ANY") {
    if ((length == this.lengthRule.quality && this.lengthRule.number == "NO") || (length != this.lengthRule.quality && this.lengthRule.number == "ONLY")) {
      correct = false;
    }
  }

  return correct;
};


// BasicGame.Papersss.prototype.gameOver = function () {
//
// };


BasicGame.Papersss.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};


BasicGame.Papersss.prototype.generateRules = function () {

  // LENGTH

  var r = Math.random();

  this.lengthRule = {};

  if (r < 0.5) {
    this.lengthRule.number = "NO";
  }
  else if (r < 1.0) {
    this.lengthRule.number = "ONLY";
  }

  r = Math.random();

  if (r < 0.33) {
    this.lengthRule.quality = "SHORT";
  }
  else if (r < 1) {
    this.lengthRule.quality = "LONG";
  }
  else {
    this.lengthRule.number = "ANY";
    this.lengthRule.quality = "LENGTH"
  };

  // COLOUR

  this.colourRule = {};

  r = Math.random();

  if (r < 0.5) {
    this.colourRule.number = "NO";
  }
  else if (r < 1.0) {
    this.colourRule.number = "ONLY";
  }

  if (r < 0.25) {
    this.colourRule.quality = "RED";
  }
  else if (r < 0.5) {
    this.colourRule.quality = "BLUE";
  }
  else if (r < 0.75) {
    this.colourRule.quality = "GREEN";
  }
  else {
    this.colourRule.number = "ANY";
    this.colourRule.quality = "COLOUR"
  };

  // SPEED

  this.speedRule = {};

  var r = Math.random();

  if (r < 0.5) {
    this.speedRule.number = "NO";
  }
  else if (r < 1.0) {
    this.speedRule.number = "ONLY";
  }

  r = Math.random();

  if (r < 0.33) {
    this.speedRule.quality = "SLOW";
  }
  else if (r < 0.66) {
    this.speedRule.quality = "FAST";
  }
  else {
    this.speedRule.number = "ANY";
    this.speedRule.quality = "SPEED"
  };
};

BasicGame.Papersss.prototype.displayRules = function () {
  this.addTextToGrid(2,24,["RULES:"]);
  this.addTextToGrid(2,25,["                    ","                    ","                    "]);
  this.addTextToGrid(2,25,[this.lengthRule.number + " " + this.lengthRule.quality + " SNAKES"]);
  this.addTextToGrid(2,26,[this.colourRule.number + " " + this.colourRule.quality + " SNAKES"]);
  this.addTextToGrid(2,27,[this.speedRule.number + " " + this.speedRule.quality + " SNAKES"]);
};


BasicGame.Papersss.prototype.createImmigrant = function () {
  if (this.snake.dead) return;
  
  this.immigrant = new Snake(this.game,-1,this.WALL_TOP + 10);
  // this.immigrantApple = this.game.add.sprite(this.game.width + 10*GRID_SIZE,(this.WALL_TOP + 10)*GRID_SIZE,'apple');
  this.immigrantApple = this.game.add.sprite(this.game.width + GRID_SIZE,(this.WALL_TOP + 10)*GRID_SIZE,'apple');
  this.immigrant.target = this.immigrantApple;

  // LENGTH

  var r = Math.random();

  if (r < 0.33) {
    this.immigrant.bodyPiecesToAdd = this.immigrant.SNAKE_START_LENGTH - 3;
  }
  else if (r < .66) {
    this.immigrant.bodyPiecesToAdd = this.immigrant.SNAKE_START_LENGTH + 3;
  }
  else {
    this.immigrant.bodyPiecesToAdd = this.immigrant.SNAKE_START_LENGTH;
  }

  // COLOUR

  r = Math.random();

  if (r < 0.33) {
    this.immigrant.setTint(0xff0000);
  }
  else if (r < .66) {
    this.immigrant.setTint(0x00ff00);
  }
  else {
    this.immigrant.setTint(0x0000ff);
  }

  // SPEED

  r = Math.random();

  if (r < 0.33) {
    // if (r < 1.0) {
    this.IMMIGRANT_TICK = this.FAST_TICK;
  }
  else if (r < 0.66) {
    this.IMMIGRANT_TICK = this.SLOW_TICK;
  }
  else {
    this.IMMIGRANT_TICK = this.SNAKE_TICK;
  };

  this.immigrantGroup.add(this.immigrant);
};
