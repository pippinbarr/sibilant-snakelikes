BasicGame.Missssssile = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Missssssile.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Missssssile.prototype.constructor = BasicGame.Missssssile;

BasicGame.Missssssile.prototype.create = function () {

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.missiles = this.game.add.group();

  this.apples = this.game.add.group();
  this.apples.create((this.WALL_LEFT + 3) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');
  this.apples.create((this.WALL_LEFT + 8) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');
  this.apples.create((this.WALL_RIGHT - 3) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');
  this.apples.create((this.WALL_RIGHT - 8) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');

  this.missileTimer = this.game.time.create(false);
  this.ticksPerNewMissile = 100;

  this.missileTicker = this.game.time.create(false);
  this.missileTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2, this.missileTick, this);
  this.missileTicker.start();

  // Name the state for resetting purposes
  this.stateName = "Missssssile";
};
BasicGame.Missssssile.prototype.hideControls = function () {
  BasicGame.SnakeBaseGame.prototype.hideControls.call(this);

  this.addMissile();
  this.missileTimer.start();
};

BasicGame.Missssssile.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Missssssile.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  this.checkSnakeMissileCollision();
};

BasicGame.Missssssile.prototype.missileTick = function () {
  this.missileTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2, this.missileTick, this);

  this.missiles.forEach(function (snake) {
    if (snake.dead) {
      snake.flash();
      return;
    }
    snake.chaseLinear();
    snake.grow();
    this.checkMissileAppleCollision(snake);
    snake.move();
  },this);
  this.checkMissileWallCollision();

};


BasicGame.Missssssile.prototype.addMissile = function () {
  var target = this.apples.getRandom();
  if (!target) return;

  var missile = new Snake(this.game,this.WALL_LEFT + 1 + Math.floor(Math.random() * (this.WALL_RIGHT - 1 - this.WALL_LEFT)),this.WALL_TOP + 1);
  missile.target = target;
  missile.bodyPiecesToAdd = 8;
  this.missiles.add(missile);
  this.missileTimer.add(Phaser.Timer.SECOND * this.SNAKE_TICK * this.ticksPerNewMissile, this.addMissile, this);
};

BasicGame.Missssssile.prototype.checkSnakeMissileCollision = function () {

  this.missiles.forEach(function (missile) {
    if (missile.dead) return;
    missile.forEach(function (missileBit) {
      if (this.snake.head.position.equals(missileBit.position)) {
        this.snake.die();
        this.gameOver();
        if (missileBit == missile.head) {
          missile.die();
          this.addToScore(this.APPLE_SCORE);
          this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2 * 8, function () {
            this.missiles.remove(missile);
          },this);
        }
      }
    },this);

    this.snake.forEach(function (snakeBit) {
      if (this.snake.dead) return;
      if (missile.head.position.equals(snakeBit.position)) {
        missile.die();
        this.addToScore(this.APPLE_SCORE);
        this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2 * 8, function () {
          this.missiles.remove(missile);
        },this);
      }
    },this);
  },this);
};

BasicGame.Missssssile.prototype.checkAppleCollision = function () {
  this.apples.forEach(function (apple) {
    if (this.snake.head.position.equals(apple.position)) {
      this.apples.remove(apple);
      this.appleSFX.play();
      this.snake.bodyPiecesToAdd = this.snake.NEW_BODY_PIECES_PER_APPLE;
      this.addToScore(this.APPLE_SCORE);
      if (!this.apples.getFirstAlive()) {
        console.log("GAME OVER, YOU ATE THE LAST APPLE");
        this.snake.die();
        this.gameOver();
      }
    }
  },this);
};

BasicGame.Missssssile.prototype.checkMissileAppleCollision = function (missile) {
  if (missile.head.position.equals(missile.target.position)) {
    if (this.apples.contains(missile.target)) {
      this.appleSFX.play();
      this.apples.remove(missile.target);
      if (!this.apples.getFirstAlive()) {
        console.log("GAME OVER, A MISSILE ATE THE LAST APPLE");
        this.snake.die();
        this.gameOver();
        return;
      }
    }
    else {
      // Crash into the wall
      missile.next.x = 0;
      missile.next.y = GRID_SIZE;
    }
  }

};

BasicGame.Missssssile.prototype.checkMissileWallCollision = function () {
  this.missiles.forEach(function (missile) {
    if (missile.dead) return;
    this.wallGroup.forEach(function (wall) {
      if (missile.head.position.equals(wall.position)) {
        missile.die();
        this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2 * 8, function () {
          this.missiles.remove(missile);
        },this);
      }
    },this);
  },this);
};

BasicGame.Missssssile.prototype.gameOver = function () {
  this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 10,function () {
    this.setGameOverText("GAME OVER","",this.score+" POINTS","","");
  },this);
};


BasicGame.Missssssile.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
