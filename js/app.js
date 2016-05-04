var PIXI = require("pixi.js"),
    $    = require("jquery");
var width = 400, height = 400;
var stage = new PIXI.Container();
var ship;

var test;
var tag = false;
var commanders = new Array,
    yellowBugs = new Array,
    redBugs    = new Array;
///

var tag = new Array;

tag.push(false);
tag.push(false);
tag.push(false);
tag.push(false);

$.getScript("js/players_classes.js");

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

    if (tag[0] == true){
        for (var index = 0; index < yellowBugs.length/4; index++){
            yellowBugs[index].x      += .05*(yellowBugs.length/4 - index);
            yellowBugs[index + 10].x += .05*(yellowBugs.length/4 - index);

            yellowBugs[index + 5].x  -= .05*(yellowBugs.length/4 + index);
            yellowBugs[index + 15].x -= .05*(yellowBugs.length/4 + index);
        }

        for (var index = 0; index < redBugs.length/4; index++){
            redBugs[index].x     += .05*(redBugs.length/4 - index);
            redBugs[index + 8].x += .05*(redBugs.length/4 - index);

            redBugs[index + 4].x  -= .05*(redBugs.length/4 + index);
            redBugs[index + 12].x -= .05*(redBugs.length/4 + index);
        }

    if(yellowBugs[yellowBugs.length/4 - 1].x > 190)
        tag[0] = false;

    } else {

        for (var index = 0; index < yellowBugs.length/4; index++){
            yellowBugs[index].x      -= .05*(yellowBugs.length/4 - index);
            yellowBugs[index + 10].x -= .05*(yellowBugs.length/4 - index);

            yellowBugs[index + 5].x  += .05*(yellowBugs.length/4 + index);
            yellowBugs[index + 15].x += .05*(yellowBugs.length/4 + index);
        }

        for (var index = 0; index < redBugs.length/4; index++){
            redBugs[index].x     -= .05*(redBugs.length/4 - index);
            redBugs[index + 8].x -= .05*(redBugs.length/4 - index);

            redBugs[index + 4].x  += .05*(redBugs.length/4 + index);
            redBugs[index + 12].x += .05*(redBugs.length/4 + index);
        }
        

        if(yellowBugs[yellowBugs.length/4 - 1].x < 185)
            tag[0] = true;
    }

    requestAnimationFrame(animate);
}

