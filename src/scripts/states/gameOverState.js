var gameOverState = new Extasy.state('gameOverState');

gameOverState.preload = function () {}

gameOverState.create = function () {}

gameOverState.update = function () {
    this.game.stop();
}
