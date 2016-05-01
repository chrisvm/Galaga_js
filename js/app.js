var PIXI = require("pixi.js"),
    $    = require("jquery");
var width = 400, height = 400;
var stage = new PIXI.Container();
var ship;

var test;
var tag = false;
var commanders = [],
    yellowBugs = [],
    redBugs    = [];

$.getScript("js/players_classes.js");

//load spriteSheet to cache
PIXI.loader
    .add('img/galaga_spritesheet.json')
    .load(onAssetsLoader);

var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 000000});
document.body.appendChild(renderer.view);

function onAssetsLoader(){


    test = Commander();
    ship = Ship();

    stage.addChild(test);
    stage.addChild(ship);

    animate();
}


function animate(){
    renderer.render(stage);

    requestAnimationFrame(animate);
}

