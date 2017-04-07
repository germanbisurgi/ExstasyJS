var gameState = new Extasy.state('gameState');

gameState.preload = function () {}

gameState.create = function () {}

gameState.update = function () {
    this.game.stateManager.switch('gameOverState');
}
