/**
 * Created by benjamin on 05-04-16.
 */
var PIXI = require("pixi.js"),
    $    = require("jquery");


$.getScript("js/app.js");


///TODO: "implement 2 bullets in bullets"

function Weapon(){
    var bullets = new Array;
    bullets.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shipBullet.png")));
    bullets.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shipBullet.png")));
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