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
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  // this.snake.y = (this.WALL_BOTTOM)*GRID_SIZE;

  this.apples = this.game.add.group();
  // this.apples.create((this.WALL_LEFT + 3) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');

  this.immigrant = null;
  this.createImmigrant();

  // Create the update tick
  this.immigrantTicker = this.game.time.create(false);
  this.immigrantTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2, this.immigrantTick, this);
  this.immigrantTicker.start();

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
  this.immigrantTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 2, this.immigrantTick, this);

  this.immigrant.chase();
  this.immigrant.grow();
  this.immigrant.move();
};

BasicGame.Papersss.prototype.checkAppleCollision = function () {
  this.apples.forEach(function (apple) {
    if (this.snake.head.position.equals(apple.position)) {
      this.apples.remove(apple);
      this.snake.bodyPiecesToAdd = this.snake.NEW_BODY_PIECES_PER_APPLE;
    }
  },this);
};

BasicGame.Papersss.prototype.createImmigrant = function () {
  this.immigrant = new Snake(this,0,this.WALL_TOP + 10);
  this.immigrantApple = this.game.add.sprite((this.WALL_RIGHT+1)*GRID_SIZE,(this.WALL_TOP + 10)*GRID_SIZE,'apple');
  this.immigrant.target = this.immigrantApple;
  this.game.add.sprite(this.immigrant);
};

BasicGame.Papersss.prototype.gameOver = function () {

};


BasicGame.Papersss.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
