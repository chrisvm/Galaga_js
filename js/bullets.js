/**
 * Created by benjamin on 05-04-16.
 */
var PIXI = require("pixi.js");

function Bullet(){
    var bullet = new PIXI.Sprite(PIXI.Texture.fromFrame("shipBullet.png"));
    
    bullet.position.x  = this.position.x;
    bullet.position.y  = this.position.y;
    bullet["velocity"] = 0.5;
    bullet["count"]    = 2;
}