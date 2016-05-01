/**
 * Created by benjaboy on 04-30-16.
 */
var PIXI = require("pixi.js");
var width  = 400;
var height = 400;

function Ship(){

    var ship = Player_Generator('galaga_ship.png');

    ship.position.x = 200;
    ship.position.y = 360;

    //ship Movement
    window.addEventListener("keydown", function (key) {
        // A Key is 65
        // Left arrow is 37
        if (key.keyCode === 65 || key.keyCode === 37) {
            // If the A key or the Left arrow is pressed, move the player to the left.
            if (ship.position.x != 0) {
                // Don't move to the left if the player is at the left side of the stage
                ship.position.x -= 3;
                console.log("right");
            }
        }

        // D Key is 68
        // Right arrow is 39
        if (key.keyCode === 68 || key.keyCode === 39) {
            // If the D key or the Right arrow is pressed, move the player to the right.
            if (ship.position.x != width - 15) {
                // Don't move to the right if the player is at the right side of the stage
                ship.position.x += 3;
                console.log("left");
            }
        }
    });

    return ship;
}

function Commander(){

   var texture = new Array;
       texture.push("commander.png", "commanderMove.png");

    var commander = Player_Generator(texture);

    commander.position.set(200, 25);

    return commander;
}

function Player_Generator(texture){

    var frames = [],
        player;

    if (texture === Array) {
        for(var index = 0; index < texture.length; index++) {
            frames[index] = PIXI.Texture.fromImage(texture[index], null, PIXI.SCALE_MODES.NEAREST);
        }
        // create a MovieClip(animation)
        player = new PIXI.extras.MovieClip(frames);

        player.animationSpeed = 0.03;
        player.play();

    } else {
        player = new PIXI.Sprite(PIXI.Texture.fromFrame(texture));
    }

    player.scale.x = 1.5;
    player.scale.y = 1.5;
    player.anchor.set(0.5);

    return player;
}
