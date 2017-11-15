BasicGame.Msss = function (game) {
  BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Msss.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);
BasicGame.Msss.prototype.constructor = BasicGame.Msss;

BasicGame.Msss.prototype.create = function () {

  this.SNAKE_START_Y = 21; // So hack-y. I'm so so sorry.
  this.map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0],
    [0,0,1,3,1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,3,1,0,0],
    [0,0,1,2,1,2,1,1,2,1,2,2,2,2,1,2,1,1,2,1,2,1,0,0],
    [0,0,1,2,1,2,2,2,2,1,2,1,1,2,1,2,2,2,2,1,2,1,0,0],
    [0,0,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,0,0],
    [0,0,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,0,0],
    [0,0,1,1,2,1,1,1,1,1,0,1,1,0,1,1,1,1,1,2,1,1,0,0],
    [1,1,1,1,2,2,2,1,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1],
    [0,0,0,0,0,1,2,1,0,1,1,0,0,1,1,0,1,2,1,0,0,0,0,0],
    [1,1,1,1,1,1,2,0,0,1,0,0,0,0,1,0,0,2,1,1,1,1,1,1],
    [0,0,0,0,0,1,2,1,0,1,1,1,1,1,1,0,1,2,1,0,0,0,0,0],
    [1,1,1,1,0,1,2,1,0,0,0,0,0,0,0,0,1,2,1,0,1,1,1,1],
    [0,0,1,1,2,2,2,1,1,1,0,1,1,0,1,1,1,2,2,2,1,1,0,0],
    [0,0,1,1,2,1,2,2,2,0,0,1,1,0,0,2,2,2,1,2,1,1,0,0],
    [0,0,1,1,2,1,1,1,2,1,0,1,1,0,1,2,1,1,1,2,1,1,0,0],
    [0,0,1,2,2,2,2,2,2,1,0,0,0,0,1,2,2,2,2,2,2,1,0,0],
    [0,0,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,0,0],
    [0,0,1,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,1,0,0],
    [0,0,1,3,1,2,1,1,1,1,2,1,1,2,1,1,1,1,2,1,3,1,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  this.createApples();

  this.SNAKE_TICK = 0.3;

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  // this.snake.y = (this.WALL_BOTTOM)*GRID_SIZE;


  this.ghost = null;
  // this.createGhost();

  // Name the state for resetting purposes
  this.stateName = "Msss";
};

BasicGame.Msss.prototype.createApples = function () {
  this.apples = this.game.add.group();
  this.miniApples = this.game.add.group();

  for (var y = 0; y < this.map.length; y++) {
    for (var x = 0; x < this.map[y].length; x++) {
      if (this.map[y][x] == 2) {
        this.miniApples.create(x*GRID_SIZE,y*GRID_SIZE,'apple_mini');
      }
      if (this.map[y][x] == 3) {
        this.apples.create(x*GRID_SIZE,y*GRID_SIZE,'apple');
      }
    }
  }

  // this.apples.create((this.WALL_LEFT + 3) * GRID_SIZE,(this.WALL_BOTTOM - 1) * GRID_SIZE,'apple');
};

BasicGame.Msss.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Msss.prototype.tick = function () {
  BasicGame.SnakeBaseGame.prototype.tick.call(this);

  // Wrap the snake around the edges, as per Pacman Physical Reality
  if (this.snake.head.x >= this.game.width) {
    this.snake.head.x = 0;
  }
  else if (this.snake.head.x < 0) {
    this.snake.head.x = this.game.width - GRID_SIZE;
  }

  // this.ghost.chase();
  // this.ghost.move();
};

BasicGame.Msss.prototype.checkAppleCollision = function () {
  this.apples.forEach(function (apple) {
    if (this.snake.head.position.equals(apple.position)) {
      this.apples.remove(apple);
      this.snake.bodyPiecesToAdd += this.snake.NEW_BODY_PIECES_PER_APPLE;
    }
  },this);
  this.miniApples.forEach(function (miniApple) {
    if (this.snake.head.position.equals(miniApple.position)) {
      this.miniApples.remove(miniApple);
      this.snake.bodyPiecesToAdd += (this.snake.NEW_BODY_PIECES_PER_APPLE/25);
    }
  },this);

};

BasicGame.Msss.prototype.createGhost = function () {
  this.ghost = new Snake(this,0,this.WALL_TOP + 10);
  this.immigrant.target = this.snake.head;
  this.game.add.sprite(this.ghost);
};

BasicGame.Msss.prototype.gameOver = function () {

};


BasicGame.Msss.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
