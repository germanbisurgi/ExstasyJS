var inputState = new Extasy.state('inputState');
var controller;

inputState.preload = function () {}

inputState.create = function () {
    controller = this.getController('standard');
    console.log(controller);
}

inputState.update = function () {
    var key = '';

    if (controller.UP.isPressed) {key += 'UP ';}
    if (controller.RIGHT.isPressed) {key += 'RIGHT ';}
    if (controller.DOWN.isPressed) {key += 'DOWN ';}
    if (controller.LEFT.isPressed) {key += 'LEFT ';}
    if (controller.G.isPressed) {key += 'G ';}
    if (controller.H.isPressed) {key += 'H ';}
    if (controller.F.isPressed) {key += 'F ';}

    this.game.renderManager.clear();
    this.game.renderManager.drawText('pressing: ' + key, 50, 50);
}
