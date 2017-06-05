var game = new Extasy.game();

var loadState = new Extasy.state('loadState');

loadState.loadAssets([
    {'type': 'image', 'name': 'mine', 'path': 'assets/images/mine.png'},
    {'type': 'audio', 'name': 'rocket', 'path': 'assets/images/rocket.png'},
    {'type': 'image', 'name': 'stone', 'path': 'assets/images/stone.png'},
]);

game.stateManager.addState(loadState);

game.switchState('loadState');

game.stateManager.debug();

console.log(game);