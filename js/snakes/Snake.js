
Snake = function (game,x,y) {
  Phaser.Group.call(this, game);

  this.game = game;
  this.SNAKE_START_LENGTH = 4;
  this.NEW_BODY_PIECES_PER_APPLE = 3;
  this.SNAKE_FLICKER_SPEED = 0.2;
  this.DEATH_DELAY = 3;

  this.next = new Phaser.Point(0,0);
  this.prev = new Phaser.Point(0,0);

  this.bodyPiecesToAdd = 0;

  this.active = true;
  this.dead = false;
  this.tint = 0xffffff;

  this.hitSFX = this.game.add.audio('hit',0.2);
  this.moveSFX = this.game.add.audio('move',0.5);

  this.bits = [];
  this.start = new Phaser.Point(x,y);

  // We'll set a target for AI snakes to move towards
  this.target = null;
  this.chaseDelta = new Phaser.Point(0,0);

  this.head = this.create(this.start.x*GRID_SIZE,this.start.y*GRID_SIZE,'head');
  this.head.tint = this.tint;
  this.game.physics.enable(this.head, Phaser.Physics.ARCADE);
  this.bits.unshift(this.head);

  this.bodyPiecesToAdd = this.SNAKE_START_LENGTH;
};

Snake.prototype = Object.create(Phaser.Group.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.setTint = function (tint) {
  this.tint = tint;
  this.head.tint = this.tint;
  this.bits.forEach(function (bit) {
    bit.tint = this.tint;
  },this);
};

Snake.prototype.tick = function () {
  if (this.dead) {
    this.flash();
    return;
  }

  this.grow();
  this.move();
};

Snake.prototype.flash = function () {
  this.visible = !this.visible;
};

Snake.prototype.reset = function () {
  this.dead = false;
  this.visible = true;
  this.head.visible = true;

  this.removeAll();

  this.head.x = this.start.x*GRID_SIZE;
  this.head.y = this.start.y*GRID_SIZE;

  this.add(this.head);
  this.bits = [];
  this.bits.unshift(this.head);

  this.next = new Phaser.Point(0,0);
  this.prev = new Phaser.Point(0,0);
  this.target = null;

  this.bodyPiecesToAdd = this.SNAKE_START_LENGTH;
};

Snake.prototype.grow = function () {
  if (this.dead) {
    return;
  }

  if (this.next.x == 0 && this.next.y == 0) return;

  this.prev = new Phaser.Point(this.next.x,this.next.y);

  if (this.bodyPiecesToAdd >= 1) {
    var bit = this.create(0,0,'body');
    bit.tint = this.tint;
    this.game.physics.enable(bit,Phaser.Physics.ARCADE);
    this.bits.unshift(bit)
    this.bodyPiecesToAdd = Math.max(0,this.bodyPiecesToAdd-1);
  }
};

Snake.prototype.move = function () {

  if (this.dead) {
    return;
  }

  if (this.next.x == 0 && this.next.y == 0) {
    return;
  }

  this.moveSFX.play();

  // Move every snake bit up by one
  for (var i = 0; i < this.bits.length - 1; i++) {
    this.bits[i].x = this.bits[i+1].x;
    this.bits[i].y = this.bits[i+1].y;
  }

  // Move the snake head
  this.head.x += this.next.x;
  this.head.y += this.next.y;
};

Snake.prototype.checkBodyCollision = function () {
  this.forEach(function (bit) {
    if (this.head.position.equals(bit.position)) {
      this.die();
      return true;
    }
  },this);
  return false;
};

Snake.prototype.chaseLinear = function () {
  if (!this.active || this.dead) {
    return;
  }

  // If we have reached the target, we stop
  if (this.target.position.equals(this.head.position)) {
    this.stop();
    return;
  }

  // Calculate the difference between the target and starting point
  var dx = this.target.x - (this.start.x*GRID_SIZE);
  var dy = this.target.y - (this.start.y*GRID_SIZE);

  // Calculate the total numbe of moves needed to get from the start to the target
  var totalMoves = Math.abs(dx) + Math.abs(dy);

  // Calculate the required delta per move
  this.chaseDelta.x += dx / totalMoves;
  this.chaseDelta.y += dy / totalMoves;

  var deltaDiff = Math.abs(this.chaseDelta.x) - Math.abs(this.chaseDelta.y);

  if (deltaDiff <= 0) {
    // We need to move vertically
    if (this.chaseDelta.y >= 0) {
      this.moveDown();
      this.chaseDelta.y -= 1;
    }
    else {
      this.moveUp();
      this.chaseDelta.y += 1;
    }
    // Reset the delta
  }
  else if (deltaDiff > 0){
    // We need to move horizontally
    if (this.chaseDelta.x >= 0) {
      this.moveRight();
      this.chaseDelta.x -= 1;
    }
    else {
      this.moveLeft();
      this.chaseDelta.x += 1;
    }
    // Reset the delta
  }
  else {
    // console.log("This happened");
  }
};

Snake.prototype.chaseMaze = function (map) {
  if (!this.active || this.dead) {
    return;
  }

  // If we have reached the target, we stop
  // if (this.target.position.equals(this.head.position)) {
  //   this.stop();
  //   return;
  // }

  var mapX = this.head.x / GRID_SIZE;
  var mapY = this.head.y / GRID_SIZE;

  var openMoves = [];
  if (mapX - 1 >= 0) {
    if (map[mapY][mapX - 1] != 1 && this.next.x <= 0) {
      openMoves.push(new Phaser.Point(-GRID_SIZE,0));
    }
  }
  if (mapX + 1 >= 0) {
    if (map[mapY][mapX + 1] != 1 && this.next.x >= 0) {
      openMoves.push(new Phaser.Point(GRID_SIZE,0));
    }
  }
  if (mapY - 1 >= 0) {
    if (map[mapY - 1][mapX] != 1 && this.next.y <= 0) {
      openMoves.push(new Phaser.Point(0,-GRID_SIZE));
    }
  }
  if (mapY + 1 >= 0) {
    if (map[mapY + 1][mapX] != 1 && this.next.y >= 0) {
      openMoves.push(new Phaser.Point(0,GRID_SIZE));
    }
  }

  var next = null;
  openMoves.forEach(function (m) {
    if (this.head.x < this.target.x && m.x > 0) {
      next = m;
    }
    else if (this.head.x > this.target.x && m.x < 0) {
      next = m;
    }
    else if (this.head.y < this.target.y && m.y > 0) {
      next = m;
    }
    else if (this.head.y > this.target.y && m.y < 0) {
      next = m;
    }
  },this);

  if (openMoves.length == 0) {
    // console.log("OH NO! HOW THE HELL HAS THIS HAPPENED???");
    // console.log(this.next);
    // console.log(this.head.x,this.head.y);
  }
  else if (next != null && Math.random() < 0.25) {
    this.next = next;
  }
  else {
    this.next = openMoves[Math.floor(Math.random() * openMoves.length)];
  }
};

Snake.prototype.wrap = function () {
  if (this.head.x >= this.game.width) {
    this.head.x = 0;
  }
  else if (this.head.x < 0) {
    this.head.x = this.game.width - GRID_SIZE;
  }
  if (this.head.y < 0) {
    this.head.y = this.game.height - GRID_SIZE;
  }
  else if (this.head.y >= this.game.height) {
    this.head.y = 0;
  }
};

Snake.prototype.die = function () {
  this.hitSFX.play();
  this.dead = true;
  this.next = new Phaser.Point(0,0);
  this.prev = new Phaser.Point(0,0);
  // this.game.time.events.add(Phaser.Timer.SECOND * this.DEATH_DELAY, this.gameOver, this);
};

Snake.prototype.moveLeft = function () {
  if (this.prev.x == 0) this.next = new Phaser.Point(-GRID_SIZE,0);
};

Snake.prototype.moveRight = function () {
  if (this.prev.x == 0) this.next = new Phaser.Point(GRID_SIZE,0);
};

Snake.prototype.moveUp = function () {
  if (this.prev.y == 0) this.next = new Phaser.Point(0,-GRID_SIZE);
};

Snake.prototype.moveDown = function () {
  if (this.prev.y == 0) this.next = new Phaser.Point(0,GRID_SIZE);
};

Snake.prototype.stop = function () {
  this.next = new Phaser.Point(0,0);
}
