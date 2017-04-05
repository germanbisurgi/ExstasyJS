var menuState = new Extasy.state('menuState');

menuState.preload = function () {

    console.log('MENU PRELOAD');

    this.game.assetManager.loadAssets([
        {'type': 'audio', 'name': 'mine', 'path': 'src/assets/images/mine.png'},
        {'type': 'audio', 'name': 'stone', 'path': 'src/assets/images/stone.png'},
        {'type': 'audio', 'name': 'rocket', 'path': 'src/assets/images/rocket.png'}
    ]);

    console.log(this.game.assets);

}

menuState.create = function () {
    console.log('MENU UPDATE');
}

menuState.update = function () {
    console.log('MENU CREATE');
    this.game.stateManager.switch('gameState');
}
