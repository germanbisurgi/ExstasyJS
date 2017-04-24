var spriteState = new Extasy.state('spriteState');
var player;

spriteState.create = function () {
    player = this.getAsset('player');
    player.addAnimation('up', [37, 38, 37, 36], 5);
    player.addAnimation('right', [25, 26, 25, 24], 5);
    player.addAnimation('down', [1, 2, 1, 0], 5);
    player.addAnimation('left', [13, 14, 13, 12], 5);
    console.log(player);
}

spriteState.update = function () {
    player.play('down');
    this.game.renderManager.clear();
    this.game.renderManager.drawImage(
        player.spriteSheet,
        player.spriteX,
        player.spriteY,
        player.spriteWidth,
        player.spriteHeight,
        0,
        0,
        player.spriteWidth,
        player.spriteHeight
    );
}
