/* --- have to be set up dynamically --- */
var screenWidth = 500;
var screenHeight = 250;
var gameWidth = 1000;
var gameHeight = 500;

var stage;
var player;
var world;

function init(){
/* --- box2d --- */
	world = new b2World(new b2Vec2(0, 10), true);
	initializeDebug();
	
	createGround();
	
/* --- easeljs --- */
	stage = new createjs.Stage(document.getElementById('game'));
	
	player = new Player({x: 200, y: 50, img: IMAGE_CAT});
			
	createjs.Ticker.addListener(window);
	createjs.Ticker.setFPS(30);
}

function tick(){
	world.Step(1/30, 10, 10);
	world.DrawDebugData();
	
	player.setPosition();
	stage.update();
}

function createGround(){
	var groundMap = [
		{x: 0, y: -200},
        {x: 0, y: 30},
        {x: 0, y: 30},
        {x: 20, y: 30},
        {x: 40, y: 40},
        {x: 70, y: 40},
        {x: 110, y: 0},
        {x: 130, y: 0},
        {x: 200, y: 20},
        {x: 500, y: 20},
        {x: 520, y: 0},
        {x: 580, y: 0},
        {x: 670, y: -30},
        {x: 800, y: -30},
        {x: 800, y: -300}
    ];
    createEdgeShape(groundMap, 0, 300);
}
function createEdgeShape(vertexArray, posX, posY, type) {
    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.restitution = 0.3

    var bodyDef = new b2BodyDef;
    bodyDef.position.x = posX / SCALE;
    bodyDef.position.y = posY / SCALE;

    if (type == 'dynamic')
        bodyDef.type = b2Body.b2_dynamicBody;
    else if (type == 'kinematic')
        bodyDef.type = b2Body.b2_kinematicBody;

    var body = world.CreateBody(bodyDef);

    fixDef.shape = new b2PolygonShape;
    for (var i = 1; i < vertexArray.length; i++) {
        fixDef.shape.SetAsEdge(new b2Vec2(vertexArray[i - 1].x / SCALE, vertexArray[i - 1].y / SCALE), new b2Vec2(vertexArray[i].x / SCALE, vertexArray[i].y / SCALE));
        body.CreateFixture(fixDef);
    }

    return body;
}