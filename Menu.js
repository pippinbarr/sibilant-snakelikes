games = [
	{name: ["Ssshadow","of the","Colossssssusss"], class: "Ssshadow"},
	{name: ["Missssssile","Command"], class: "Missssssile"},
	{name: ["Msss","Pacman"], class: "Msss"},
	{name: ["Papersss","Pleassse"], class: "Papersss"},
	{name: ["Sssensssible","Sssoccer"], class: "Sssensssible"},
	{name: ["Minesssweeper"], class: "Minesssweeper"},
	{name: ["Sssuper","Mario","Brosss"], class: "Sssuper"},
	{name: ["WWW.PIPPINBARR.COM"], class: "Homepage"},
];

BasicGame.Menu = function (game) {
	BasicGame.SnakeBaseGame.call(this,game);
};

BasicGame.Menu.prototype = Object.create(BasicGame.SnakeBaseGame.prototype);

BasicGame.Menu.prototype.create = function () {

	this.menuButtons = this.game.add.group();
	this.menuText = this.game.add.group();
	this.snakes = this.game.add.group();

	this.TITLE = "SIBILANT SNAKELIKES";

	var x = 2;
	var y = 1;
	this.apples = this.game.add.group();
	for (var i = 0; i < this.TITLE.length; i++) {
		if (this.TITLE.charAt(i) == ' ') continue;
		this.apples.create(x*GRID_SIZE + i*GRID_SIZE,y*GRID_SIZE,'apple');
	}

	BasicGame.SnakeBaseGame.prototype.create.call(this);

	this.snakes.add(this.snake);

	// this.game.input.onDown.add(function() {
	// 	this.appleSFX.play(0);
	// },this);

	this.SNAKE_TICK = 0.02;


	if (this.game.device.desktop) {
		this.snake.head.x = 0;
		this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	}
	else {
		this.snake.head.x = -1*GRID_SIZE;
	}

	this.snake.next = new Phaser.Point(0,0);
	this.snake.prev = new Phaser.Point(0,0);

	this.currentItem = 0;
	this.selected = undefined;

	this.createMenu();

	this.snake.head.y = games[this.currentItem].y*GRID_SIZE;

	this.snake.moveSFX.volume = 0;
};

BasicGame.Menu.prototype.tick = function () {
	ticker.add(Phaser.Timer.SECOND * this.SNAKE_TICK, this.tick, this);
	this.snakes.forEach(function (snake) {
		snake.tick();
	},this);
};

BasicGame.Menu.prototype.createMenu = function () {

	var x = 2;
	var y = 1;
	this.addTextToGrid(x,y,[this.TITLE]);

	menuTop = 4;
	x = 2;
	y = menuTop;

	for (var i = 0; i < games.length; i++) {
		this.addTextToGrid(x,y,games[i].name,this.textGroup,this.menuButtons,this.menuItemTouched,i);
		games[i].x = x;
		games[i].y = y;
		y += games[i].name.length + 1;
	}

	menuBottom = menuTop + games.length - 1;

	var instructions = "OH NO."
	if (this.game.device.desktop) {
		instructions = ["UP/DOWN=SELECT","ENTER=PLAY"];
	}
	else {
		instructions = ["TOUCH ITEM TO PLAY"];
	}
	this.addTextToGrid(x,this.NUM_ROWS - 3,instructions);
};


BasicGame.Menu.prototype.update = function () {
	BasicGame.SnakeBaseGame.prototype.update.call(this);
	if (this.selected && !this.selectionComplete) {
		this.checkMenuCollision();
		var complete = true;
		this.snakes.forEach(function (snake) {
			snake.forEach(function (bit) {
				if (bit.x < this.game.width) {
					complete = false;
					return;
				}
			},this);
			if (complete == false) return;
		},this);
		if (complete) {
			if (games[this.currentItem].class == "Homepage") {
				window.location = "http://www.pippinbarr.com/";
			}
			else {
				this.game.time.events.add(Phaser.Timer.SECOND * 1, function () {
					this.game.state.start(games[this.currentItem].class);
				},this);
			}
		}
	}
};

BasicGame.Menu.prototype.handleKeyboardInput = function () {

	if (this.selected) return;

	if (this.downKey.downDuration(10)) {
		this.snake.moveSFX.play();
		this.currentItem = (this.currentItem + 1) % games.length;
		this.snake.head.y = games[this.currentItem].y*GRID_SIZE;
	}
	else if (this.upKey.downDuration(10)) {
		this.snake.moveSFX.play();
		this.currentItem = (this.currentItem - 1);
		if (this.currentItem < 0) this.currentItem = games.length - 1;
		this.snake.head.y = games[this.currentItem].y*GRID_SIZE;
	}
	else if (this.enterKey.downDuration(10)) {
		this.selectMenuItem()
	}
};


BasicGame.Menu.prototype.menuItemTouched = function (item) {
	if (this.selected) return;

	this.appleSFX.play();

	this.currentItem = item.itemIndex;
	this.snake.head.y = games[this.currentItem].y*GRID_SIZE;

	this.selectMenuItem();
};

BasicGame.Menu.prototype.selectMenuItem = function () {
	this.snake.next = new Phaser.Point(GRID_SIZE,0);
	this.selected = games[this.currentItem].class;
	this.appleSFX.play();

	for (var i = 1; i < games[this.currentItem].name.length; i++) {
		var snake = new Snake(this.game,this.snake.x/GRID_SIZE - i*3,games[this.currentItem].y+i);
		snake.next = new Phaser.Point(GRID_SIZE,0);
		this.snakes.add(snake);
		snake.moveSFX.volume = 0;
	}
};

BasicGame.Menu.prototype.checkMenuCollision = function () {

	this.snakes.forEach(function (snake) {
		if (snake.head.x >= this.game.width) return;
		if (snake.head.x < 0) return;

		var x = snake.head.x/GRID_SIZE;
		var y = snake.head.y/GRID_SIZE;

		if (this.textGrid[y][x].text != '') {
			this.textGrid[y][x].text = '';
			snake.bodyPiecesToAdd += 1;
		}
	},this);
};

BasicGame.Menu.prototype.updateSnakePosition = function () {

};

BasicGame.Menu.prototype.createInput = function () {
};

BasicGame.Menu.prototype.createApple = function () {
};

BasicGame.Menu.prototype.createInstructions = function () {
};

BasicGame.Menu.prototype.createControls = function () {
};

BasicGame.Menu.prototype.handleTouchInput = function () {
};

BasicGame.Menu.prototype.checkAppleCollision = function () {
};

BasicGame.Menu.prototype.createWalls = function () {
};

BasicGame.Menu.prototype.checkWallCollision = function () {
};

BasicGame.Menu.prototype.checkBodyCollision = function () {
};

BasicGame.Menu.prototype.setScoreText = function () {
};

BasicGame.Menu.prototype.constructor = BasicGame.SnakeBaseGame;
