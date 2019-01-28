
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#ffffff';
	
};

Level.prototype.preload = function () {
	
	this.load.pack('img', 'assets/pack.json');
	
};

var timer;

Level.prototype.create = function () {
	var _field = this.add.sprite(144.0, 144.0, 'field');
	
	var _ball = this.add.sprite(660.0, 432.0, 'ball');
	_ball.anchor.setTo(0.5, 0.46666590372721356);
	this.game.physics.arcade.enable(_ball);
	_ball.body.setCircle(24.0);
	_ball.body.collideWorldBounds = true;
	_ball.body.bounce.x = 1.0;
	_ball.body.bounce.y = 1.0;
	_ball.body.maxVelocity.x = 600.0;
	_ball.body.maxVelocity.y = 600.0;
	_ball.body.drag.x = 50.0;
	_ball.body.drag.y = 50.0;
	_ball.body.angularVelocity = 100.0;
	
	var _homeTeam = this.add.physicsGroup(Phaser.Physics.ARCADE);
	_homeTeam.position.setTo(-59.0, 107.0);
	
	var _korea_5 = this.add.sprite(396.0, 420.0, 'korea', null, _homeTeam);
	
	var _korea_4 = this.add.sprite(516.0, 120.0, 'korea', null, _homeTeam);
	
	var _korea_3 = this.add.sprite(396.0, 180.0, 'korea', null, _homeTeam);
	
	var _korea_2 = this.add.sprite(276.0, 300.0, 'korea', null, _homeTeam);
	
	var _korea_1 = this.add.sprite(516.0, 480.0, 'korea', null, _homeTeam);
	
	var _awayTeam = this.add.physicsGroup(Phaser.Physics.ARCADE);
	_awayTeam.position.setTo(24.0, 96.0);
	
	var _korea1_5 = this.add.sprite(840.0, 204.0, 'korea2', null, _awayTeam);
	
	var _korea1_4 = this.add.sprite(1020.0, 312.0, 'korea2', null, _awayTeam);
	
	var _korea1_3 = this.add.sprite(972.0, 144.0, 'korea2', null, _awayTeam);
	
	var _korea1_2 = this.add.sprite(972.0, 480.0, 'korea2', null, _awayTeam);
	
	var _korea1_1 = this.add.sprite(840.0, 420.0, 'korea2', null, _awayTeam);
	
	_homeTeam.setAll("body.collideWorldBounds", true);
	_homeTeam.setAll("body.bounce.x", 0.8);
	_homeTeam.setAll("body.bounce.y", 0.8);
	_homeTeam.setAll("body.drag.x", 50);
	_homeTeam.setAll("body.drag.y", 50);
	_homeTeam.setAll("body.maxVelocity.x", 300);
	_homeTeam.setAll("body.maxVelocity.y", 300);
	_awayTeam.setAll("body.collideWorldBounds", true);
	_awayTeam.setAll("body.bounce.x", 0.8);
	_awayTeam.setAll("body.bounce.y", 0.9);
	_awayTeam.setAll("body.drag.x", 50);
	_awayTeam.setAll("body.drag.y", 50);
	_awayTeam.setAll("body.maxVelocity.x", 300);
	_awayTeam.setAll("body.maxVelocity.y", 300);
	
	
	// fields
	
	this.fField = _field;
	this.fBall = _ball;
	this.fHomeTeam = _homeTeam;
	this.fKorea_5 = _korea_5;
	this.fKorea_4 = _korea_4;
	this.fKorea_3 = _korea_3;
	this.fKorea_2 = _korea_2;
	this.fKorea_1 = _korea_1;
	this.fAwayTeam = _awayTeam;
	this.fKorea1_5 = _korea1_5;
	this.fKorea1_4 = _korea1_4;
	this.fKorea1_3 = _korea1_3;
	this.fKorea1_2 = _korea1_2;
	this.fKorea1_1 = _korea1_1;
	
	
	
	this.game.physics.arcade.worldBounds = true;
	var bounds = new Phaser.Rectangle(140, 140, 1030, 580);
	this.game.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
	var graphics = this.game.add.graphics(bounds.x, bounds.y);
	graphics.lineStyle(4, 0xffd900, 1);
	graphics.drawRect(0, 0, bounds.width, bounds.height);
	
	this.fBall.body.onWorldBounds = new Phaser.Signal();
	this.fBall.body.onWorldBounds.add(setBounce, this);
	
	this.fBall.body.onCollide = new Phaser.Signal();
	console.log("Collide Test: "+ this.fBall.body.onCollide);
	
	//	this.game.physics.arcade.collide(this.fBall, this.)
	//	var setView = new Phaser.Rectangle(0, 0, 300, 300);
	//	this.camera.view = setView;
	//	this.camera.view.setTo(-200, 0, 300, 300);
	//	this.game.camera.view.setTo(-200, 0, 300, 300);
	this.game.camera.bounds.setTo(0, 0, 1280, 720);
	//	this.game.camera.setBoundsToWorld();
	//	this.game.camera.setBoundsToWorld();
	//	this.camera.follow(field);
	//	this.world.fixedToCamera = true;
	//field.fixedToCamera = true;
	this.fBall.smoothed = false;
	this.fBall.body.friction = 0.4;
	
	timer = this.game.time.create(false);
	timer.loop(5000, timerTest, this);
	timer.start();
//	timer.duration.
};
function timerTest(){
	console.log("5000ms");
}
/* --- end generated code --- */
// -- user code here --
function test(){
	console.log("collide");
}
var bounce = 1;
//var velocity = 300;

Level.prototype.update = function(){
	this.game.physics.arcade.collide(this.fBall, this.fHomeTeam);
	this.game.physics.arcade.collide(this.fBall,this.fAwayTeam) ;
	this.game.physics.arcade.collide(this.fHomeTeam);
	this.game.physics.arcade.collide(this.fAwayTeam);
	this.game.physics.arcade.collide(this.fHomeTeam, this.fAwayTeam);
//	if(this.fBall.speed == 0){
//		this.fBall.body.moves = false;
//	}
//	var velX = this.fBall.body.acceleration.x;
//	velX += 0.5;
//	var velY = this.fBall.body.acceleration.y;
//	velY += 0.5;
//	this.fBall.body.acceleration.setTo(velX, velY);
//	console.log("velX: " + velX);
//	console.log("velY: " + velY);
//	if (velY >= 0){
//		this.fBall.body.moves=false;
//	}
//	var speed = this.fBall.body.speed;
//	console.log(speed);
};
Level.prototype.render = function(){
//	this.game.debug.bodyInfo(this.fKorea_1, 400, 20, '#000000');
//	this.game.debug.body(this.fBall, '#000000', true);
	this.game.debug.text("test timer", timer.duration.toFixed(0), 32, 32, 'red');
};
function setBounce(fBall){
	if(bounce <= 1){
		if(bounce <= 0.25){
			bounce -= 0.05;
			fBall.body.bounce.x = bounce;
			fBall.body.bounce.y = bounce;
			console.log("2 bounce: "+bounce);
		}else{
			bounce -= 0.25;
			fBall.body.bounce.x = bounce; 
			fBall.body.bounce.y = bounce;
			console.log("1bounce: " + bounce);
		}
	}else{
		fBall.body.moves = false;
		console.log("bounce end");		
	}
}
