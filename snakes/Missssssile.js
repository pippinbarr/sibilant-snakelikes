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

  this.addMissile();

  // Name the state for resetting purposes
  this.stateName = "Missssssile";
};

BasicGame.Missssssile.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Missssssile.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  this.missiles.forEach(function (snake) {
    snake.chase();
    snake.grow();
    snake.move();
  },this);

  this.checkMissileAppleCollision();
};

BasicGame.Missssssile.prototype.addMissile = function () {
  var missile = new Snake(this,this.WALL_LEFT + 1 + Math.floor(Math.random() * (this.WALL_RIGHT - 1 - this.WALL_LEFT)),this.WALL_TOP + 1);
  missile.target = this.apples.getRandom();
  while (!missile.target.alive) {
    missile.target = this.apples.getRandom();
  }
  this.missiles.add(missile);
};

BasicGame.Missssssile.prototype.checkAppleCollision = function () {
  this.apples.forEach(function (apple) {
    if (this.snake.head.position.equals(apple.position)) {
      this.apples.remove(apple);
      this.snake.bodyPiecesToAdd = this.snake.NEW_BODY_PIECES_PER_APPLE;
      if (!this.apples.getFirstAlive()) {
        console.log("GAME OVER, YOU ATE THE LAST APPLE");
      }
    }
  },this);
};

BasicGame.Missssssile.prototype.checkMissileAppleCollision = function () {
  this.apples.forEach(function (apple) {
    this.missiles.forEach(function (missile) {
      if (missile.head.position.equals(apple.position)) {
        this.missiles.remove(missile);
        this.apples.remove(apple);
        if (this.apples.getFirstAlive()) {
          this.addMissile();
        }
        else {
          console.log("GAME OVER, A MISSILE ATE THE LAST APPLE");
          return;
        }
      }
    },this)
  },this);
};

BasicGame.Missssssile.prototype.gameOver = function () {

};


BasicGame.Missssssile.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
