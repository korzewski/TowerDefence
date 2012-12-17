
var screenWidth = 500;
var screenHeight = 250;
var gameWidth = 1000;
var gameHeight = 500;

function setGamePosition(object){
	var el = object;
	var offsetX, offsetY;

	if(el.x > screenWidth/2 && el.x < gameWidth - screenWidth/2){
		offsetX = (screenWidth/2) - el.x;
	}
	if(el.y > screenHeight/2 && el.y < gameHeight - screenHeight/2){
		offsetY = (screenHeight/2) - el.y;
	}
	
	$('#game').css({
		left: offsetX,
		top: offsetY
	});
}