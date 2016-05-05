var PIXI = require("pixi.js"),
    $    = require("jquery");

$.getScript("js/players_classes.js");
$.getScript("js/movement.js");
$.getScript("js/bullets.js");

var width = 400, height = 400;
var stage = new PIXI.Container();

var ship;
var commanders = new Array,
    yellowBugs = new Array,
    redBugs    = new Array;
///

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

    // if(animTag)
    //     yellowBugs = enemyMoveOut(yellowBugs);
    // // else
    // //     yellowBugs = enemyMoveIn(yellowBugs);
    // //
    // if(animIter == 1000)
    //     animTag = true;
    // else if(animIter == 0)
    //     animTag = false;

    requestAnimationFrame(animate);
}


//ship Movement
window.addEventListener("keydown", function (key) {
    // A Key is 65
    // Left arrow is 37
    if (key.keyCode === 65 || key.keyCode === 37) {
        // If the A key or the Left arrow is pressed, move the player to the left.
        if (ship.position.x > 15) {
            // Don't move to the left if the player is at the left side of the stage
            ship.position.x -= 3;
            console.log("right");
        }
    }

    // D Key is 68
    // Right arrow is 39
    if (key.keyCode === 68 || key.keyCode === 39) {
        // If the D key or the Right arrow is pressed, move the player to the right.
        if (ship.position.x < 385) {
            // Don't move to the right if the player is at the right side of the stage
            ship.position.x += 3;
            console.log("left");
        }
    }

    // var shootBullet;
    // //space bar
    // if (key.keyCode === 32) {
    //     shootBullet = function () {
    //         this["bullet"] = new PIXI.Sprite(PIXI.Texture.fromFrame("shipBullet.png"));
    //         this.bullet.position.x = this.position.x;
    //         this.bullet.position.y = this.position.y + 2;
    //
    //         this["inBounds"] = true;
    //     }
    // }

});