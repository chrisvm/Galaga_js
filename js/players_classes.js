/**
 * Created by benjaboy on 04-30-16.
 */
var PIXI = require("pixi.js");

function Ship(){

    var ship = Player_Generator('galaga_ship.png');

    ship.position.x = 200;
    ship.position.y = 380;

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
    });

    console.log("ship Created");
    return ship;
}

function Commanders(){

   var texture = new Array;
       texture.push("commander.png");
       texture.push("commanderMove.png");

    var commanders = [];
    var positions = new Array;

    positions[0].x = 166;
    positions[0].y = 25;

    positions[1].x = 200;
    positions[1].y = 25;

    positions[2].x = 234;
    positions[2].y = 25;

    positions[2].x = 166;
    positions[2].y = 25;


    for (var index = 0; index < positions.length; index++) {
        commanders[index] = Player_Generator(texture);
        commanders[index].position.set(positions[index].x, positions[index].y);
    }

    console.log("commander Created");
    console.log(positions[0].x + " : " + positions[0].y);

    return commanders;
}

function Player_Generator(texture){

    var frames = [],
        player;

    if (texture instanceof Array) {
        for(var index = 0; index < texture.length; index++) {
            frames.push(PIXI.Texture.fromFrame(texture[index]));
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
