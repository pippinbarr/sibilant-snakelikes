BasicGame.Sssensssible = function (game) {
  BasicGame.Snake.call(this,game);
};

BasicGame.Sssensssible.prototype = Object.create(BasicGame.Snake.prototype);
BasicGame.Sssensssible.prototype.constructor = BasicGame.Ssshadow;

BasicGame.Sssensssible.prototype.create = function () {

  BasicGame.Snake.prototype.create.call(this);


  // Name the state for resetting purposes
  this.stateName = "Sssensssible";
};

BasicGame.Sssensssible.prototype.update = function () {
  BasicGame.Snake.prototype.update.call(this);
};

BasicGame.Sssensssible.prototype.tick = function () {
  BasicGame.Snake.prototype.tick.call(this);
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
