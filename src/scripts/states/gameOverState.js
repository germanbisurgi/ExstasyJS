var gameOverState = new Extasy.state('gameOverState');

gameOverState.preload = function () {

    this.game.assetManager.loadAssets([
        {'type': 'audio', 'name': 'mine', 'path': 'src/assets/images/mine.png'},
        {'type': 'audio', 'name': 'stone', 'path': 'src/assets/images/stone.png'},
        {'type': 'audio', 'name': 'rocket', 'path': 'src/assets/images/rocket.png'}
    ]);

    console.log(this.game.assets);

}

gameOverState.create = function () {}

gameOverState.update = function () {
    this.game.stop();
}
