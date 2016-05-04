var PIXI = require("pixi.js"),
    $    = require("jquery");

$.getScript("js/players_classes.js");
$.getScript("js/movement.js");

var width = 400, height = 400;
var stage = new PIXI.Container();

var ship;
var commanders = new Array,
    yellowBugs = new Array,
    redBugs    = new Array;

var animTag  = false;
var animIter = 0;

//load spriteSheet to cache
PIXI.loader
    .add('img/galaga_spritesheet.json')
    .load(onAssetsLoader);

var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 000000});
document.body.appendChild(renderer.view);

function onAssetsLoader(){

    ship       = Ship();
    commanders = Commanders();
    yellowBugs = Yellow_Bugs();
    redBugs    = Red_Bugs();

    stage.addChild(ship);

    for (var index = 0; index < commanders.length; index++){
        stage.addChild(commanders[index]);
    }

    for (var index = 0; index < yellowBugs.length; index++){
        stage.addChild(yellowBugs[index]);
    }

    for (var index = 0; index < redBugs.length; index++){
        stage.addChild(redBugs[index]);
    }

    animate();
}


function animate(){
    renderer.render(stage);

    if(animTag)
        yellowBugs = enemyMoveOut(yellowBugs);
    // else
    //     yellowBugs = enemyMoveIn(yellowBugs);
    //
    if(animIter == 1000)
        animTag = true;
    else if(animIter == 0)
        animTag = false;

    requestAnimationFrame(animate);
}

