var stage;
var player;

function init(){
	stage = new createjs.Stage(document.getElementById('game'));
	
	player = new Player({x: 130, y: 50});

	stage.addChild(player.obj);
	
	/*
	player.obj.onClick = function(){
		alert('playerX: '+player.obj.x+ ' playerY: '+player.obj.y);
	}
	*/
	
	createjs.Ticker.addListener(window);
	createjs.Ticker.setFPS(30);
}

function tick(){
	player.setPosition();
	
	stage.update();
}