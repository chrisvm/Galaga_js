/**
 * Created by benjaboy on 04-30-16.
 */
var PIXI = require("pixi.js");
var width = 400, height = 400;

function Ship(shipTexture){

    var ship    = new PIXI.Sprite(shipTexture);

    ship.position.x = width/2;
    ship.position.y = height - 20;

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

function Commander(texture){

    var frames = [],
        commander;

    for(var index = 0; index < texture.length; index++) {
        frames[index] = new PIXI.Texture.fromImage(texture[index]);
    }
    // create a MovieClip (brings back memories from the days of Flash, right ?)
    commander = new PIXI.extras.MovieClip(frames);

    /*
     * A MovieClip inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    commander.position.set(200, 25);

    commander.anchor.set(0.5);
    commander.animationSpeed = 0.03;

    commander.play();

    return commander;
}
