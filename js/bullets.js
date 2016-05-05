/**
 * Created by benjamin on 05-04-16.
 */
var PIXI = require("pixi.js"),
    $    = require("jquery");


$.getScript("js/app.js");


///TODO: "try and implement class bullet different" "Manipulate bullet in app.js not inside class"

function Weapon(){
    var weapon;
    weapon = new PIXI.Sprite(PIXI.Texture.fromFrame("shipBullet.png"));

    weapon.scale.x = 1.5;
    weapon.scale.y = 1.5;
    weapon.visible = false;
    weapon.anchor.set(0.5);

    weapon['bulletsShot'] = 0;
    weapon['shootBullet'] = function (shooter) {
                                if (weapon.bulletsShot < 2) {
                                    console.log(weapon.visible + ", " + shooter.position.y);
                                    weapon.position.x  = shooter.position.x;
                                    weapon.position.y  = shooter.position.y;
                                    //console.log(weapon.position.y);

                                    weapon["velocity"] = 0.5;
                                    weapon.bulletsShot++;
                        
                                    console.log(weapon.bulletsShot);
                                }
                            };
    return weapon;
}