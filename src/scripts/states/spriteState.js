var spriteState = new Extasy.state('spriteState');
var player;

spriteState.create = function () {
    player = this.addSprite(50, 50, 'player');
    player.addAnimation('up', [37, 38, 37, 36], 10);
    player.addAnimation('right', [25, 26, 25, 24], 10);
    player.addAnimation('down', [1, 2, 1, 0], 10);
    player.addAnimation('left', [13, 14, 13, 12], 10);
    console.log(player);
    console.log(this.listEntities());
}

spriteState.update = function () {
    player.play('down');
    player.angle++; 
}
