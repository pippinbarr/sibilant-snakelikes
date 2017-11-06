
Snake = function (game,x,y) {
  Phaser.Group.call(this, game);

  this.SNAKE_START_LENGTH = 4;
  this.NEW_BODY_PIECES_PER_APPLE = 3;
  this.SNAKE_FLICKER_SPEED = 0.2;
  this.DEATH_DELAY = 3;

  this.next = new Phaser.Point(0,0);
  this.prev = new Phaser.Point(0,0);

  this.bodyPiecesToAdd = 0;

  this.dead = false;

  this.hitSFX = this.game.add.audio('hit',0.2);
  this.moveSFX = this.game.add.audio('move',0.2);

  this.bits = [];
  this.startX = x;
  this.startY = y;

  // We'll set a target for AI snakes to move towards
  this.target = null;

  this.head = this.create(this.startX*GRID_SIZE,this.startY*GRID_SIZE,'head');
  this.game.physics.enable(this.head, Phaser.Physics.ARCADE);
  this.bits.unshift(this.head);

  this.bodyPiecesToAdd = this.SNAKE_START_LENGTH;
};

Snake.prototype = Object.create(Phaser.Group.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.tick = function () {
  if (this.dead) {
    this.flash();
    return;
  }

  this.grow();
  this.move();
};

Snake.prototype.flash = function () {
  this.bits.forEach(function (bit) {
    bit.visible = !bit.visible;
  });
};

Snake.prototype.reset = function () {
  this.dead = false;
  this.visible = true;
  this.head.visible = true;

  this.removeAll();

  this.head.x = this.startX*GRID_SIZE;
  this.head.y = this.startY*GRID_SIZE;

  this.add(this.head);
  this.bits = [];
  this.bits.unshift(this.head);

  this.next = new Phaser.Point(0,0);
  this.prev = new Phaser.Point(0,0);
  this.target = null;

  this.bodyPiecesToAdd = this.SNAKE_START_LENGTH;
};

Snake.prototype.grow = function () {
  if (this.next.x == 0 && this.next.y == 0) return;

  this.prev = new Phaser.Point(this.next.x,this.next.y);

  if (this.bodyPiecesToAdd > 0) {
    var bit = this.create(0,0,'body');
    this.game.physics.enable(bit,Phaser.Physics.ARCADE);
    this.bits.unshift(bit)
    this.bodyPiecesToAdd = Math.max(0,this.bodyPiecesToAdd-1);
  }
};

Snake.prototype.move = function () {

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

  // Wrap
  if (this.head.x >= this.game.width) {
    this.head.x = 0;
  }
  else if (this.head.x < 0) {
    this.head.x = this.game.width - GRID_SIZE;
  }
  if (this.head.y >= this.game.height) {
    this.head.y = 0;
  }
  else if (this.head.y < 0) {
    this.head.y = this.game.height - GRID_SIZE;
  }
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

Snake.prototype.chase = function () {
  if (this.target.x == this.head.x/GRID_SIZE && this.target.y == this.head.y/GRID_SIZE) {
    this.stop();
    return;
  }

  var difference = Phaser.Point.subtract(this.target,this.head);
  console.log(difference);

  if (Math.abs(difference.x) >= Math.abs(difference.y)) {
    this.moveRight();
  }
  else {
    this.moveDown();
  }

  return;

  if (Math.abs(xDistance) >= Math.abs(yDistance)) {
    // Pursue on x for this round
    if (xDistance < 0) {
      this.moveLeft();
    }
    else {
      this.moveRight();
    }
  }
  else {
    if (yDistance < 0) {
      this.moveUp();
    }
    else {
      this.moveDown();
    }
  }
};

Snake.prototype.die = function () {
  this.hitSFX.play();
  this.dead = true;
  this.next = new Phaser.Point(0,0);
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
