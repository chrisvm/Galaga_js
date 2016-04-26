var PIXI = require("pixi.js"),
    $    = require("jquery");

PIXI.loader
    .add('img/galaga_spritesheet.json')
    .load(onAssetsLoader);


var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

var stage =  new PIXI.Container();

function onAssetsLoader(){

    console.log("test");

    var texture = PIXI.Texture.fromFrame('galaga_ship.gif');

    console.log("PIXI.Texture");
    var ship    = new PIXI.Sprite(texture);

    ship.position.x = 400;
    ship.position.y = 300;

    stage.addChild(ship);

    animate();
}


function animate(){
    requestAnimationFrame(animate);

    renderer.render(stage);
}
