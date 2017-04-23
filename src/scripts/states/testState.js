var testState = new Extasy.state('testState');
var player;

testState.create = function () {
    player = this.getAsset('player');
    player.addAnimation('down', [1, 2, 1, 0], 5);
    player.addAnimation('left', [13, 14, 13, 12], 5);
    player.addAnimation('right', [25, 26, 25, 24], 5);
    console.log(player);
}

testState.update = function () {
    player.play('left');
    this.game.renderManager.clear();
    this.game.renderManager.drawImage(
        player.spriteSheet,
        player.spriteX,
        player.spriteY,
        player.spriteWidth,
        player.spriteHeight,
        50,
        50,
        player.spriteWidth,
        player.spriteHeight
    );
}
