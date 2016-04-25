var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
$('body').append(renderer.view);

var stage =  new PIXI.Container();

var texture = PIXI.Texture.fromFrame('galaga_ship2.png');
var ship    = new PIXI.Sprite(texture);

ship.anchor.x = 400;
ship.anchor.y = 300;

stage.add(ship);

animate();

function animate(){
    requestAnimationFrame(animate);

    renderer.render(stage);
}
