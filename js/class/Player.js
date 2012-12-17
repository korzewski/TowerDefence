function Player(config){
	this.speed = 10;
	this.radius = 20;
	
	this.obj = new createjs.Shape();
	this.obj.graphics.beginFill('#000');
	this.obj.graphics.arc(0, 0, this.radius, 0, Math.PI*2);
	
	this.obj.x = config.x;
	this.obj.y = config.y;
};
Player.prototype.setPosition = function(){
		if(keys[37]){
			if(!(this.obj.x - this.radius <= 0)){
				player.obj.x -= player.speed;
			}
		} else if(keys[39]){
			if(!(this.obj.x + this.radius >= gameWidth)){
				player.obj.x += player.speed;
			}
		}
		if(keys[38]){
			if(!(this.obj.y - this.radius <= 0)){
				player.obj.y -= player.speed;
			}
		} else if(keys[40]){
			if(!(this.obj.y + this.radius >= gameHeight)){
				player.obj.y += player.speed;
			}
		}
	
	setGamePosition(player.obj);
};