var loadState = new Extasy.state('loadState');

loadState.preload = function () {

    this.game.assetManager.loadAssets([
        {'type': 'image', 'name': 'mine', 'path': 'src/assets/images/mine.png'},
        {'type': 'image', 'name': 'stone', 'path': 'src/assets/images/stone.png'},
        {'type': 'image', 'name': 'rocket', 'path': 'src/assets/images/rocket.png'}
    ]);

}

loadState.create = function () {
    console.log('state created');
}

loadState.update = function () {
    // console.log('state update');
}
