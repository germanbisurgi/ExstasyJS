var inputState = new Extasy.state('inputState');
var clouds;
var mountains;

var player;
inputState.preload = function () {}

inputState.create = function () {
    clouds = this.addTileSprite(0, 0, 400, 300, 'space');
    mountains = this.addTileSprite(0, 100, 400, 200, 'mountains');

    player = this.addSprite(32, 32, 'player');
    player.addAnimation('up', [37, 38, 37, 36], 10);
    player.addAnimation('right', [25, 26, 25, 24], 10);
    player.addAnimation('down', [1, 2, 1, 0], 10);
    player.addAnimation('left', [13, 14, 13, 12], 10);
    player.anchorPoint(0.5, 0.5);

}

inputState.update = function () {
    player.rotate(1);

    controller = this.getController('standard');

    if (controller.UP.isPressed) {
        player.play('up');
        clouds.scroll('down', 5)
        mountains.scroll('down', 30);
    }
    if (controller.RIGHT.isPressed) {
        player.play('right');
        clouds.scroll('left', 5)
        mountains.scroll('left', 30);
    }
    if (controller.DOWN.isPressed) {
        player.play('down');
        clouds.scroll('up', 5)
        mountains.scroll('up', 30);
    }
    if (controller.LEFT.isPressed) {
        player.play('left');
        clouds.scroll('right', 5);
        mountains.scroll('right', 30);
    }

    this.game.renderManager.clear();
}
