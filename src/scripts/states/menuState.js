var menuState = new Extasy.state('menuState');

menuState.preload = function () {}

menuState.create = function () {}

menuState.update = function () {
    this.game.stateManager.switch('gameState');
}
