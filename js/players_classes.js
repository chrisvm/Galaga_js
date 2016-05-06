/**
 * Created by benjaboy on 04-30-16.
 */
var PIXI = require("pixi.js"),
    $    = require("jquery");


$.getScript("js/bullets.js");


function Ship(){

    var ship = Player_Generator('galaga_ship.png');
    
    
    ship.position.x = 200;
    ship.position.y = 380;
   
    console.log("ship Created");
    return ship;
}

function Commanders(){

   var texture = new Array;
       texture.push("commander.png");
       texture.push("commanderMove.png");

    var commanders = new Array();
    var positions  = new Array();

    positions.push( {x: 164, y: 25},
                    {x: 188, y: 25},//----
                    {x: 212, y: 25},//----
                    {x: 236, y: 25});

    for (var index = 0; index < positions.length; index++) {
        commanders[index] = Player_Generator(texture);
        commanders[index].position.set(positions[index].x, positions[index].y);
    }


    return commanders;
}

function Red_Bugs(){

    var texture = new Array;
        texture.push("redBug.png");
        texture.push("redBugMove.png");

    var redBugs    = new Array;
    var positions  = new Array;

    //top row
    positions.push( {x: 116, y: 45},
                    {x: 140, y: 45},
                    {x: 164, y: 45},
                    {x: 188, y: 45},//-----
                    {x: 212, y: 45},//-----
                    {x: 236, y: 45},
                    {x: 260, y: 45},
                    {x: 284, y: 45});

    //bottom row
    positions.push( {x: 116, y: 65},
                    {x: 140, y: 65},
                    {x: 164, y: 65},
                    {x: 188, y: 65},//-----
                    {x: 212, y: 65},//-----
                    {x: 236, y: 65},
                    {x: 260, y: 65},
                    {x: 284, y: 65});

    for(var index = 0; index < positions.length; index++)
    {
        redBugs[index] = Player_Generator(texture);
        redBugs[index].position.set(positions[index].x, positions[index].y);
    }

    return redBugs;
}

function Yellow_Bugs(){

    var texture = new Array;
    texture.push("yellowBug.png");
    texture.push("yellowBugMove.png");

    var yellowBugs = new Array;
    var positions  = new Array;

    //top row
    positions.push( {x:  92, y: 85},
                    {x: 116, y: 85},
                    {x: 140, y: 85},
                    {x: 164, y: 85},
                    {x: 188, y: 85},//-----
                    {x: 212, y: 85},//-----
                    {x: 236, y: 85},
                    {x: 260, y: 85},
                    {x: 284, y: 85},
                    {x: 308, y: 85});

    //bottom row
    positions.push( {x:  92, y: 105},
                    {x: 116, y: 105},
                    {x: 140, y: 105},
                    {x: 164, y: 105},
                    {x: 188, y: 105},//-----
                    {x: 212, y: 105},//-----
                    {x: 236, y: 105},
                    {x: 260, y: 105},
                    {x: 284, y: 105},
                    {x: 308, y: 105});

    for (var index = 0; index < positions.length; index++)
    {
        yellowBugs[index] = Player_Generator(texture);
        yellowBugs[index].position.set(positions[index].x, positions[index].y);
    }

    return yellowBugs;
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

        player.animationSpeed = 0.015;
        player.play();

    } else {
        player = new PIXI.Sprite(PIXI.Texture.fromFrame(texture));
    }

    player.scale.x = 1.5;
    player.scale.y = 1.5;
    player.anchor.set(0.5);

    return player;
}

