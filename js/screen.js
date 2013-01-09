function focusCamera(object){
	var el = object.GetWorldCenter();
	var offsetX, offsetY;

	if(el.x * SCALE > screenWidth/2 && el.x * SCALE < gameWidth - screenWidth/2){
		offsetX = (screenWidth/2) - el.x * SCALE;
	}
	if(el.y * SCALE > screenHeight/2 && el.y * SCALE < gameHeight - screenHeight/2){
		offsetY = (screenHeight/2) - el.y * SCALE;
	}
	
	$('#game, #gameDebug').css({
		left: offsetX,
		top: offsetY
	});
}