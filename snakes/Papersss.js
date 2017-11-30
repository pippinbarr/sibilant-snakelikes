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

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.game.sound.mute = true;

  // this.snake.y = (this.WALL_BOTTOM)*GRID_SIZE;

  this.apples = this.game.add.group();
  // this.apples.create((this.WALL_LEFT + 3) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');

  this.immigrant = null;
  this.createImmigrant();

  // Create the update tick
  this.immigrantTicker = this.game.time.create(false);
  this.immigrantTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2, this.immigrantTick, this);
  this.immigrantTicker.start();


  this.generateRules();
  this.displayRules();
  this.chanceForNewRules = 0.1;


  // Name the state for resetting purposes
  this.stateName = "Papersss";
};



BasicGame.Papersss.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Papersss.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);
};

BasicGame.Papersss.prototype.immigrantTick = function () {
  this.immigrantTicker.add(Phaser.Timer.SECOND * this.IMMIGRANT_TICK, this.immigrantTick, this);

  if (this.immigrant == null || this.immigrant.target == null) {
    return;
  }

  if (this.immigrant.dead) {
    this.immigrant.flash();
    return;
  }

  this.immigrant.chaseLinear();
  this.immigrant.grow();
  this.immigrant.move();
  this.checkSnakeImmigrantCollision();

  if (this.immigrant.head.position.equals(this.immigrant.target.position)) {
    console.log("Immigrant reached apple");
    this.resetImmigrant();
  }
};

BasicGame.Papersss.prototype.checkAppleCollision = function () {
  this.apples.forEach(function (apple) {
    if (this.snake.head.position.equals(apple.position)) {
      this.apples.remove(apple);
      this.snake.bodyPiecesToAdd = this.snake.NEW_BODY_PIECES_PER_APPLE;
    }
  },this);
};

BasicGame.Papersss.prototype.resetImmigrant = function () {
  if (!this.immigrant.target) return;

  this.immigrant.target.destroy();
  this.immigrant.target = null;

  // Need to start a new immigrant after a delay
  this.game.time.events.add(Phaser.Timer.SECOND * this.IMMIGRANT_TICK * 5,function () {
    this.immigrant.destroy();
    this.immigrant = null;
    if (Math.random() < this.chanceForNewRules) {
      this.generateRules();
      this.displayRules();
    }
  },this);
  this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 20,function () {
    this.createImmigrant();
  },this);
};


BasicGame.Papersss.prototype.checkSnakeImmigrantCollision = function () {
  if (this.immigrant.dead || this.snake.dead || !this.immigrant.target) return;

  this.immigrant.forEach(function (bit) {
    if (this.snake.head.position.equals(bit.position)) {
      this.snake.die();
      if (bit == this.immigrant.head) {
        this.immigrant.die();
      }
    }
  },this);

  if (this.immigrant.dead || this.snake.dead) return;

  this.snake.forEach(function (bit) {
    if (this.immigrant.head.position.equals(bit.position)) {
      this.immigrant.die();
      if (bit == this.snake.head) {
        this.snake.die();
      }
      else {
        this.immigrant.die();
        this.resetImmigrant();
      }
    }
  },this);
};


BasicGame.Papersss.prototype.gameOver = function () {

};


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
  this.addTextToGrid(2,24,["RULES:"],this.textGroup);
  this.addTextToGrid(2,25,["                    ","                    ","                    "],this.textGroup);
  this.addTextToGrid(2,25,[this.lengthRule.number + " " + this.lengthRule.quality + " SNAKES"],this.textGroup);
  this.addTextToGrid(2,26,[this.colourRule.number + " " + this.colourRule.quality + " SNAKES"],this.textGroup);
  this.addTextToGrid(2,27,[this.speedRule.number + " " + this.speedRule.quality + " SNAKES"],this.textGroup);
};


BasicGame.Papersss.prototype.createImmigrant = function () {
  this.immigrant = new Snake(this.game,0,this.WALL_TOP + 10);
  this.immigrantApple = this.game.add.sprite(this.game.width + 10*GRID_SIZE,(this.WALL_TOP + 10)*GRID_SIZE,'apple');
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

  // if (r < 0.33) {
    if (r < 1.0) {
    this.IMMIGRANT_TICK = this.SNAKE_TICK * 0.5;
  }
  else if (r < .66) {
    this.IMMIGRANT_TICK = this.SNAKE_TICK * 3;
  }
  else {
    this.IMMIGRANT_TICK = this.SNAKE_TICK;
  };

  this.game.add.sprite(this.immigrant);
};
