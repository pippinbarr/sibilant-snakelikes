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
    [0,0,0,0,0,1,2,1,0,1,0,1,1,0,1,0,1,2,1,0,0,0,0,0],
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
  this.ghostColors = [
    0xff0000,
    0xffaaaa,
    0x00ffff,
    0xffa500,
  ];

  this.createApples();

  this.SNAKE_TICK = 0.3;

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  // this.snake.y = (this.WALL_BOTTOM)*GRID_SIZE;

  this.GHOST_START_X = this.WALL_LEFT + 10;
  this.GHOST_START_Y = this.WALL_TOP + 12
  this.ghostsToAdd = 0; // Number of ghosts we need to add to the game
  this.ghosts = this.game.add.group();
  this.ghostTicker = this.game.time.create(false);
  this.GHOST_ADD_TICKS = 10;

  this.DEAD_GHOST_GHOST_RESET_TICKS = 10;
  this.toDie = []; // Tracking things to die at end of tick

  this.APPLE_SCORE = 25;

  // Name the state for resetting purposes
  this.stateName = "Msss";
};

BasicGame.Msss.prototype.addGhost = function () {
  this.ghostTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * this.GHOST_ADD_TICKS, this.addGhost, this);

  if (this.ghostsToAdd > 0) {

    var startX = this.GHOST_START_X*GRID_SIZE;
    var startY = this.GHOST_START_Y*GRID_SIZE;
    var canAdd = true;
    this.ghosts.forEach(function (ghost) {
      if (this.locationHasCollisionWithGroup(startX,startY,ghost)) {
        canAdd = false;
        return;
      }
    },this);

    if (this.locationHasCollisionWithGroup(startX,startY,this.snake)) {
      canAdd = false;
      return;
    }

    if (!canAdd) {
      return;
    }

    var ghost = new Snake(this.game,this.GHOST_START_X,this.GHOST_START_Y);
    ghost.head.tint = this.ghostColors.unshift();
    ghost.target = this.snake.head;
    ghost.active = true;
    ghost.bodyPiecesToAdd = ghost.NEW_BODY_PIECES_PER_APPLE;
    this.ghosts.add(ghost);
    this.ghostsToAdd--;
  }
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
  this.snake.wrap();

  this.ghosts.forEach(function (ghost) {
    if (ghost.dead) {
      ghost.flash();
      return;
    }
    ghost.chaseMaze(this.map);
    ghost.grow();
    ghost.move();
    ghost.wrap();
  },this);

  this.checkGhostWallCollisions();
  this.checkGhostGhostCollisions();
  this.checkSnakeGhostCollisions();

  this.toDie.forEach(function (snake) {
    if (!snake.dead) {
      snake.die();
      // If this was a ghost dying it should respawn
      if (snake != this.snake) {
        this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * this.DEAD_GHOST_GHOST_RESET_TICKS, this.resetGhost, this, snake);
      } else {
        this.score = 0;
        this.setScoreText(this.score.toString());
        this.resetBoard();
      }
    }
  },this);
  this.toDie = [];
};

BasicGame.Msss.prototype.resetGhost = function(ghost) {
  this.ghosts.remove(ghost);
  this.ghostsToAdd++;
  this.ghostColors.push(ghost.head.tint);
};

BasicGame.Msss.prototype.resetBoard = function() {
  this.ghosts.removeAll();
  this.ghostsToAdd = 4;
  this.ghostColors = [
    0xff0000,
    0xffaaaa,
    0x00ffff,
    0xffa500,
  ];
  this.snake.reset();
  this.apples.removeAll();
  this.miniApples.removeAll();
  this.createApples();

}

BasicGame.Msss.prototype.checkAppleCollision = function () {
  this.apples.forEach(function (apple) {
    if (this.snake.head.position.equals(apple.position)) {
      this.addToScore(this.APPLE_SCORE);
      this.apples.remove(apple);
      this.snake.bodyPiecesToAdd += this.snake.NEW_BODY_PIECES_PER_APPLE;
    }
  },this);
  this.miniApples.forEach(function (miniApple) {
    if (this.snake.head.position.equals(miniApple.position)) {
      this.addToScore(this.APPLE_SCORE/25);
      this.miniApples.remove(miniApple);
      this.snake.bodyPiecesToAdd += (this.snake.NEW_BODY_PIECES_PER_APPLE/25);
    }
  },this);
  if (this.apples.children.length == 0 && this.miniApples.children.length == 0) {
    console.log("GAME OVER MAN! YOU WIN!");
  }
};

BasicGame.Msss.prototype.checkGhostWallCollisions = function () {
  this.ghosts.forEach(function (ghost) {
    if (ghost.dead) {
      return;
    }
    if (this.locationHasCollisionWithGroup(ghost.head.world.x,ghost.head.world.y,this.wallGroup)) {
      this.toDie.push(ghost);
    };
  },this);
};

BasicGame.Msss.prototype.checkGhostGhostCollisions = function () {
  this.ghosts.forEach(function (ghost) {
    if (ghost.dead) {
      return;
    }
    this.ghosts.forEach(function (otherGhost) {
      if (otherGhost.dead || ghost == otherGhost) {
        return;
      }
      if (this.locationHasCollisionWithGroup(ghost.head.world.x,ghost.head.world.y,otherGhost)) {
        this.toDie.push(ghost);
      }
    },this);
    if (!this.snake.dead && this.locationHasCollisionWithGroup(ghost.head.world.x,ghost.head.world.y,this.snake)) {
      this.toDie.push(ghost);
    }
  },this);
};

BasicGame.Msss.prototype.checkSnakeGhostCollisions = function () {
  this.ghosts.forEach(function (ghost) {
    if (ghost.dead || this.snake.dead) {
      return;
    }
    if (this.locationHasCollisionWithGroup(this.snake.head.world.x,this.snake.head.world.y,ghost)) {
      this.toDie.push(this.snake);
    }
  },this);
};

BasicGame.Msss.prototype.checkBodyCollision = function () {
  this.snake.forEach(function (bit) {
    if (this.snake.head.position.equals(bit.position) && bit != this.snake.head) {
      this.toDie.push(this.snake);
      return;
    }
  },this);
},

BasicGame.Msss.prototype.checkWallCollision = function () {
  this.wallGroup.forEach(function (wall) {
    if (this.snake.head.position.equals(wall.position) && !this.snake.dead) {
      this.toDie.push(this.snake);
      return;
    }
  },this);
},

BasicGame.Msss.prototype.hideControls = function () {
  BasicGame.SnakeBaseGame.prototype.hideControls.call(this);
  this.ghostsToAdd = 4;
  this.ghostTicker.add(Phaser.Timer.SECOND * this.SNAKE_TICK * this.GHOST_ADD_TICKS, this.addGhost, this);
  this.ghostTicker.start();
};


BasicGame.Msss.prototype.gameOver = function () {

};


BasicGame.Msss.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
