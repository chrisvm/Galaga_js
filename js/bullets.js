/**
 * Created by benjamin on 05-04-16.
 */
var PIXI = require("pixi.js");

function Bullet(){
    var weapon = new Array;

    weapon['bulletsShot'] = 0;
    weapon['shootBullet'] = function (positionX, positionY) {
                                if (weapon.bulletsShot < 2) {
                                    var bullet = new PIXI.Sprite(PIXI.Texture.fromFrame("shipBullet.png"));
                                    console.log("created bullet");
                        
                                    bullet.position.x  = positionX;
                                    bullet.position.y  = positionY;
                                    bullet["velocity"] = 0.5;
                                    weapon.bulletsShot++;
                        
                                    while (bullet.visible) {
                                        if (bullet.position.y > 0)
                                            bullet.position.y -= bullet.velocity;
                                        else {
                                            bullet.visible = false;
                                            weapon.bulletShot--;
                                        }
                                    }
                                }
                            };
    return weapon;
}