var inputState = new Extasy.state('inputState');
var tileSprite;

inputState.preload = function () {}

inputState.create = function () {
    tileSprite = this.addTileSprite(0, 0, 400, 300, 'tileBackground');
}

inputState.update = function () {

    controller = this.getController('standard');

    if (controller.UP.isPressed) {tileSprite.scroll('up', 5)}
    if (controller.RIGHT.isPressed) {tileSprite.scroll('right', 5)}
    if (controller.DOWN.isPressed) {tileSprite.scroll('down', 5)}
    if (controller.LEFT.isPressed) {tileSprite.scroll('left', 5)}

    this.game.renderManager.clear();
    this.game.renderManager.drawTileSprite(tileSprite);
}
