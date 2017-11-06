BasicGame.Missssssile = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Missssssile.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Missssssile.prototype.constructor = BasicGame.Missssssile;

BasicGame.Missssssile.prototype.create = function () {

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.missiles = this.game.add.group();

  this.missileSnake = new Snake(this,10,10);
  this.missileSnake.target = new Phaser.Point(15*GRID_SIZE,27*GRID_SIZE);

  // Name the state for resetting purposes
  this.stateName = "Missssssile";
};

BasicGame.Missssssile.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Missssssile.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  this.missileSnake.chase();
  this.missileSnake.grow();
  this.missileSnake.move();
};

BasicGame.Missssssile.prototype.checkAppleCollision = function () {

};

BasicGame.Missssssile.prototype.gameOver = function () {

};


BasicGame.Missssssile.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
