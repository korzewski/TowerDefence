var screenWidth = 500;
var screenHeight = 250;
var gameWidth = 1000;
var gameHeight = 500;

var stage;
var player;

function init(){
	stage = new createjs.Stage(document.getElementById('game'));

	player = new Player({x: 130, y: 50, img: IMAGE_CAT});
			
	createjs.Ticker.addListener(window);
	createjs.Ticker.setFPS(30);
		
		
		
	
	/*
	player.bitmap.onPress = function(e){
		var offset = {x: player.x - e.stageX, y: player.y - e.stageY};
		//var offset = {x: e.target.x - e.stageX, y: e.target.y - e.stageY};
		
		e.onMouseMove = function(evt){
			player.x = evt.stageX + offset.x;
			player.y = evt.stageY + offset.y;
			
			//evt.target.x = evt.stageX + offset.x;
			//evt.target.y = evt.stageY + offset.y;
			//evt.target.updateBitmapPosition();
			
			console.log('playerX: '+player.x+ ' playerY: '+player.y);
		};
	};
	*/
}

function tick(){
	player.setPosition();
	
	stage.update();
}