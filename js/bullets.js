/**
 * Created by benjamin on 05-04-16.
 */
var PIXI = require("pixi.js"),
    $    = require("jquery");


$.getScript("js/app.js");


///TODO: "implement 2 bullets in bullets"

function Weapon(){
    var bullets = [];
    bullets.push(new PIXI.Sprite(PIXI.Texture.fromFrame("bullet.png")));
    bullets.push(new PIXI.Sprite(PIXI.Texture.fromFrame("bullet.png")));
    bullets["velocity"] = 0.5;


    bullets[0].scale.x = 1.5;
    bullets[0].scale.y = 1.5;
    bullets[0].visible = false;
    bullets[0].anchor.set(0.5);
    bullets[0]['used'] = false;
    
    bullets[1].scale.x = 1.5;
    bullets[1].scale.y = 1.5;
    bullets[1].visible = false;
    bullets[1].anchor.set(0.5);
    bullets[1]['used'] = false;


    bullets['bulletsShot'] = 0;
    bullets['shootBullet'] = function (shooter) {
                                if (!bullets[0].used) {
                                    bullets[0].used    = true;
                                    bullets[0].visible = true;
                                   // console.log(bullets.visible + ", " + shooter.position.y);
                                    bullets[0].position.x  = shooter.position.x;
                                    bullets[0].position.y  = shooter.position.y;
                                    //console.log(bullets.position.y);
                                    bullets.bulletsShot++;
                                    console.log("bullet shot 1");
                                    
                                } else if(!bullets[1].used) {
                                    bullets[1].used    = true;
                                    bullets[1].visible = true;
                                   // console.log(bullets.visible + ", " + shooter.position.y);
                                    bullets[1].position.x  = shooter.position.x;
                                    bullets[1].position.y  = shooter.position.y;
                                    //console.log(bullets.position.y);

                                    bullets.bulletsShot++;
                                    console.log("bullet shot 2");
                                } else {
                                    console.log("no bullets");
                                }
                            };
    return bullets;
}

function collision(r1, r2) {
    var distance = Math.sqrt((r1.position.x - r2.position.x)*(r1.position.x - r2.position.x) +
        (r1.position.y - r2.position.y)*(r1.position.y - r2.position.y));

    return (15 > distance)
}

///TODO: Make collision between commanders work
function filterCollision(bugs, bullet){
    for (var index = 0; index < bugs.length; index++){
        if(bugs[index][0].visible){
            if(collision(bugs[index][0], bullet)){
                bullet.visible = false;
                bullet.used    = false;
                bugs[index][0].visible = false;
                bugs[index][1].visible = true;
                bugs[index][1].play();
                break;
            }
        }
    }

}


function Explosion(){
    var texture = [];
        texture.push("explosionE1.png");
        texture.push("explosionE2.png");
        texture.push("explosionE3.png");
        texture.push("explosionE4.png");
        texture.push("blanc.png");
    var frames  = [];

    for (var index = 0; index < texture.length; index++) {
        frames.push(PIXI.Texture.fromFrame(texture[index]));
    }
    var explosion = new PIXI.extras.MovieClip(frames);
    explosion.animationSpeed = 0.05;
    explosion.scale.x = 1.5;
    explosion.scale.y = 1.5;
    explosion.anchor.set(0.5);
    explosion.loop = false;
    explosion.visible = false;
    
    return explosion;
}