var inputState = new Extasy.state('inputState');
var tileSprite;
var player;

inputState.preload = function () {}

inputState.create = function () {
    tileSprite = this.addTileSprite(0, 0, 400, 300, 'tileBackground');

    player = this.addSprite(180, 150, 'player');
    player.addAnimation('up', [37, 38, 37, 36], 10);
    player.addAnimation('right', [25, 26, 25, 24], 10);
    player.addAnimation('down', [1, 2, 1, 0], 10);
    player.addAnimation('left', [13, 14, 13, 12], 10);
}

inputState.update = function () {
    
    controller = this.getController('standard');

    if (controller.UP.isPressed) {
        player.play('up');
        tileSprite.scroll('down', 1)
    }
    if (controller.RIGHT.isPressed) {
        player.play('right');
        tileSprite.scroll('left', 1)
    }
    if (controller.DOWN.isPressed) {
        player.play('down');
        tileSprite.scroll('up', 1)
    }
    if (controller.LEFT.isPressed) {
        player.play('left');
        tileSprite.scroll('right', 1)
    }

    this.game.renderManager.clear();
}
