function Player(config){
	this.img = config.img;
	this.x = config.x;
	this.y = config.y;
	
	this.speed = 10;
	this.radius = 10;
	
	this.bitmap = new createjs.Bitmap(this.img, 30, 30);
	this.bitmap.regX = this.bitmap.regY = this.radius;
	
	this.hitAreaa = new createjs.Shape();
	this.hitAreaa.graphics.beginFill("#000").drawRect(-12, -12, 30, 30);
	this.bitmap.hitArea = this.hitAreaa;
	
	this.updateBitmapPosition();

	stage.addChild(this.bitmap);
};
Player.prototype.updateBitmapPosition = function(){
	this.bitmap.x = this.x;
	this.bitmap.y = this.y;
};
Player.prototype.setPosition = function(){
		if(keys[37]){
			if(!(this.x - this.radius <= 10)){
				player.x -= player.speed;
			}
		} else if(keys[39]){
			if(!(this.x + this.radius >= gameWidth - 20)){
				player.x += player.speed;
			}
		}
		if(keys[38]){
			if(!(this.y - this.radius <= 0)){
				player.y -= player.speed;
			}
		} else if(keys[40]){
			if(!(this.y + this.radius >= gameHeight - 10)){
				player.y += player.speed;
			}
		}
	this.updateBitmapPosition();
	setGamePosition(player);
};