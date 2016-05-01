var PIXI = require("pixi.js"),
    $    = require("jquery");


$.getScript("js/players_classes.js");

//load spriteSheet to cache
PIXI.loader
    .add('img/galaga_spritesheet.json')
    .load(onAssetsLoader);

var width = 400, height = 400;
var stage = new PIXI.Container();
var ship;
var test;
var tag = false;
var commanders = [],
    yellowBugs = [],
    redBugs    = [];


var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 000000});
document.body.appendChild(renderer.view);

function onAssetsLoader(){
    var commanderTexture = ["commander.png", "commanderMove.png"];

    ship = Ship(PIXI.Texture.fromFrame('galaga_ship.png'));

    test = Commander(commanderTexture);

    stage.addChild(ship);
    stage.addChild(test);

    animate();
}


function animate(){
    renderer.render(stage);

    requestAnimationFrame(animate);
}

