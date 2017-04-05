var loadState = new Extasy.state('loadState');

loadState.preload = function () {

    console.log('LOADSTATE PRELOAD');

    this.game.assetManager.loadAssets([
        {'type': 'image', 'name': 'mine', 'path': 'src/assets/images/mine.png'},
        {'type': 'image', 'name': 'stone', 'path': 'src/assets/images/stone.png'},
        {'type': 'image', 'name': 'rocket', 'path': 'src/assets/images/rocket.png'}
    ]);

    console.log(this.game.assets);

}

loadState.create = function () {
    console.log('LOADSTATE UPDATE');
}

loadState.update = function () {
    console.log('LOADSTATE CREATE');
    this.game.stateManager.switch('menuState');
}
