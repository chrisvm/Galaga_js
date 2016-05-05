/**
 * Created by benjamin on 05-04-16.
 */
var PIXI = require("pixi.js");

///TODO: "try and implement class bullet different" "Manipulate bullet in app.js not inside class"

function Bullet(){
    var weapon = new Array;
    weapon['bullet'];
    weapon['bullet'] = new PIXI.Sprite(PIXI.Texture.fromFrame("shipBullet.png"));

    weapon['bulletsShot'] = 0;
    weapon['shootBullet'] = function (shooter) {
                                if (weapon.bulletsShot < 2) {
                                    
                                    console.log(weapon.bullet.visible + ", " + shooter.position.y);
                                    weapon.bullet.position.x  = shooter.position.x;
                                    weapon.bullet.position.y  = shooter.position.y;
                                    console.log(weapon.bullet.position.y);

                                    weapon.bullet["velocity"] = 0.1;
                                    weapon.bulletsShot++;
                        
                                    while (weapon.bullet.visible) {
                                        if (weapon.bullet.position.y > 0) {
                                            weapon.bullet.position.y -= bullet.velocity;
                                            console.log(weapon.bullet.position.y);

                                        }
                                        else {
                                            weapon.bullet.visible = false;
                                            weapon.bulletShot--;
                                            console.log(weapon.bullet.visible + ", " + shooter.position.y);

                                        }
                                    }
                                }
                            };
    return weapon;
}