var gameState = new Extasy.state('gameState');

gameState.preload = function () {

    console.log('GAME PRELOAD');

    this.game.assetManager.loadAssets([
        {'type': 'audio', 'name': 'mine', 'path': 'src/assets/images/mine.png'},
        {'type': 'audio', 'name': 'stone', 'path': 'src/assets/images/stone.png'},
        {'type': 'audio', 'name': 'rocket', 'path': 'src/assets/images/rocket.png'}
    ]);

    console.log(this.game.assets);

}

gameState.create = function () {
    console.log('GAME UPDATE');
}

gameState.update = function () {
    console.log('GAME CREATE');
    this.game.stop();
}
