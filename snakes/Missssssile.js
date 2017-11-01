BasicGame.Missssssile = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Missssssile.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Missssssile.prototype.constructor = BasicGame.Missssssile;

BasicGame.Missssssile.prototype.create = function () {

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  this.missiles = this.game.add.group();

  // Name the state for resetting purposes
  this.stateName = "Missssssile";
};

BasicGame.Missssssile.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Missssssile.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);
};

BasicGame.Missssssile.prototype.checkAppleCollision = function () {

};

BasicGame.Missssssile.prototype.gameOver = function () {

};


BasicGame.Missssssile.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
