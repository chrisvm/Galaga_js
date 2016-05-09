var PIXI = require("pixi.js"),
    $    = require("jquery");

$.getScript("js/players_classes.js");
$.getScript("js/movement.js");
$.getScript("js/bullets.js");


var left = false, right = false;//use for ship movement
var width = 400, height = 400;
var stage = new PIXI.Container();

var ship, bullets, explosion;
var commanders = new Array,
    yellowBugs = new Array,
    redBugs    = new Array;

//load spriteSheet to cache
PIXI.loader
    .add('img/galaga_spritesheet.json')
    .load(onAssetsLoader);

var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 000000});
document.body.appendChild(renderer.view);

function onAssetsLoader(){

    ship       = Ship();
    bullets    = Weapon();
    commanders = Commanders();
    yellowBugs = Yellow_Bugs();
    redBugs    = Red_Bugs();
   // explosion  = Explosion();

    stage.addChild(ship);
    stage.addChild(bullets[0]);
    stage.addChild(bullets[1]);
    //stage.addChild(explosion);

    for (var index = 0; index < commanders.length; index++){
        stage.addChild(commanders[index][0]);
        stage.addChild(commanders[index][1]);
    }

    for (var index = 0; index < yellowBugs.length; index++){
        stage.addChild(yellowBugs[index][0]);
        stage.addChild(yellowBugs[index][1]);
    }

    for (var index = 0; index < redBugs.length; index++){
        stage.addChild(redBugs[index][1]);
        stage.addChild(redBugs[index][0]);
    }

    animate();
}

function animate() {
    renderer.render(stage);

    if (left)
        ship.position.x -= 2;

    if (right)
        ship.position.x += 2;

    if (bullets[0].visible) {
        if (bullets[0].position.y > 0) {
            
            bullets[0].position.y -= bullets.velocity * 5;

            filterCollision(yellowBugs, bullets[0]);
            filterCollision(redBugs, bullets[0]);
            filterCollision(commanders, bullets[0]);
            
        }
        else {
            bullets[0].visible = false;
            bullets[0].used = false;
            bullets.bulletShot--;
        }
    }

    if (bullets[1].visible) {
        if (bullets[1].position.y > 0){
            
            bullets[1].position.y -= bullets.velocity * 5;
            
            filterCollision(yellowBugs, bullets[1]);
            filterCollision(redBugs,    bullets[1]);
            filterCollision(commanders, bullets[1]);
        }

        else {
            bullets[1].visible = false;
            bullets[1].used = false;
            bullets.bulletShot--;
        }
    }

    requestAnimationFrame(animate);
}

//Ship movement
window.addEventListener("keydown", function (key) {
    // A Key is 65
    // Left arrow is 37
    if (key.keyCode === 65 || key.keyCode === 37) {
        // If the A key or the Left arrow is pressed, move the player to the left.
        if (ship.position.x > 15) {
            // Don't move to the left if the player is at the left side of the stage
            left = true;
        }
    }

    // D Key is 68
    // Right arrow is 39
    if (key.keyCode === 68 || key.keyCode === 39) {
        // If the D key or the Right arrow is pressed, move the player to the right.
        if (ship.position.x < 385) {
            // Don't move to the right if the player is at the right side of the stage
            right = true;
        }
    }

    if (key.keyCode === 32)
        bullets.shootBullet(ship);

});

window.addEventListener("keyup", function (key) {
    // A Key is 65
    // Left arrow is 37
    if (key.keyCode === 65 || key.keyCode === 37)
        left =  false;

    // D Key is 68
    // Right arrow is 39
    if (key.keyCode === 68 || key.keyCode === 39)
        right =  false;
});

