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

  this.SNAKE_TICK = 0.2;
  this.DEATH_PAUSE_TICKS = 0;
  this.deathPauseTicks = 0;

  this.ghosts = this.game.add.group();

  BasicGame.SnakeBaseGame.prototype.create.call(this);

  // this.snake.y = (this.WALL_BOTTOM)*GRID_SIZE;
  this.GHOST_START_X = this.WALL_LEFT + 10;
  this.GHOST_START_Y = this.WALL_TOP + 12
  this.ghostsToAdd = 0; // Number of ghosts we need to add to the game
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
    ghost.head.tint = this.ghostColors.shift();
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
};

BasicGame.Msss.prototype.update = function () {
  BasicGame.SnakeBaseGame.prototype.update.call(this);
};

BasicGame.Msss.prototype.tick = function () {
  console.log(this.deathPauseTicks);
  if (this.deathPauseTicks > 0) {
    this.deathPauseTicks--;
    ticker.add(Phaser.Timer.SECOND * this.SNAKE_TICK, this.tick, this);
    return;
  }

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
        this.setScoreText(this.score.toString());
        this.gameOver();
      }
    }
  },this);
  if (this.toDie.length != 0) {
    console.log("Add ticks");
    this.deathPauseTicks += this.DEATH_PAUSE_TICKS;
  }
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

  if (this.apples.children.length == 0 && this.miniApples.children.length == 0 && !this.snake.dead) {
    this.game.time.events.add(Phaser.Timer.SECOND * this.SNAKE_TICK * 10,this.resetBoard,this);
    this.ghostsToAdd = 0;
    this.ghosts.forEach(function (ghost) {
      ghost.dead = true;
    },this);
    this.snake.dead = true;
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
    if (ghost.dead || this.toDie.indexOf(ghost) != -1) {
      return;
    }

    // Check if this ghost collides with any other ghost
    this.ghosts.forEach(function (otherGhost) {
      if (ghost == otherGhost || otherGhost.dead) {
        return;
      }
      // Go through each bit of the other ghost and check for collision
      otherGhost.forEach(function (bit) {
        if (ghost.head.position.equals(bit.position)) {
          this.toDie.push(ghost);
          return;
        }
      },this);
    },this);

    // Check if this ghost collides with the snake
    if (!this.snake.dead) {
      // Go through each bit of the snake and check for collision
      this.snake.forEach(function (bit) {
        if (ghost.head.position.equals(bit.position)) {
          this.toDie.push(ghost);
        }
      },this);
    }

    // Check if this ghost collides with its own body
    ghost.forEach(function (bit) {
      if (bit != ghost.head && ghost.head.position.equals(bit.position)) {
        this.toDie.push(ghost);
      }
    },this);
  },this);
};

BasicGame.Msss.prototype.checkSnakeGhostCollisions = function () {
  this.ghosts.forEach(function (ghost) {
    if (ghost.dead || this.snake.dead || this.toDie.indexOf(this.snake) != -1) {
      return;
    }
    ghost.forEach(function (bit) {
      if (this.snake.head.position.equals(bit.position)) {
        this.toDie.push(this.snake);
        return;
      }
    },this);
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
  this.setGameOverText("GAME OVER","",this.score+" POINTS","","");
};


BasicGame.Msss.prototype.repositionApple = function () {
  // We don't reposition the apple with the usual algorithm
};
