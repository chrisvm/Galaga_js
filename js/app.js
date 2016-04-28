var PIXI = require("pixi.js"),
    $    = require("jquery");

function Ship(){

    return ship;
}

PIXI.loader
    .add('img/galaga_spritesheet.json')
    .load(onAssetsLoader);

var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
//var ship  = Ship();

function onAssetsLoader(){

    var shipTexture = PIXI.Texture.fromFrame('galaga_ship.gif');
    var ship    = new PIXI.Sprite(shipTexture);

    ship.position.x = 400;
    ship.position.y = 540;

    stage.addChild(ship);

    animate();
}


function animate(){
    requestAnimationFrame(animate);

    renderer.render(stage);
}

