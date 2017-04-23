var loadState = new Extasy.state('loadState');

loadState.preload = function () {

    this.loadImage('leaf', 'src/assets/images/pattern.png');
    this.loadSpriteSheet('player', 'src/assets/images/player.png', 32, 32);

    this.game.assetManager.loadAssets([
        {'type': 'image', 'name': 'pattern', 'path': 'src/assets/images/pattern.png'},
        {'type': 'image', 'name': 'space', 'path': 'src/assets/images/space.jpg'},
        {'type': 'image', 'name': 'player', 'path': 'src/assets/images/player.png'},
        {'type': 'image', 'name': 'rainbow', 'path': 'src/assets/images/rainbow.jpg'},
        {'type': 'image', 'name': 'colorito', 'path': 'src/assets/images/colorito.jpg'},
        {'type': 'image', 'name': 'leaf', 'path': 'src/assets/images/leaf.jpg'},
        {'type': 'image', 'name': 'stellar', 'path': 'src/assets/images/stellar.jpg'},
        {'type': 'image', 'name': 'yellow', 'path': 'src/assets/images/yellow.jpg'},
        {'type': 'image', 'name': 'mosaic', 'path': 'src/assets/images/mosaic.png'},
        {'type': 'image', 'name': 'rowe', 'path': 'src/assets/images/rowe.png'},
        {'type': 'image', 'name': 'fantasy', 'path': 'src/assets/images/fantasy.jpg'},
        {'type': 'image', 'name': 'numbers', 'path': 'src/assets/images/numbers.jpg'},
        {'type': 'image', 'name': 'pinkhole', 'path': 'src/assets/images/pinkhole.jpg'},
        {'type': 'image', 'name': 'bubbles', 'path': 'src/assets/images/bubbles.jpg'},
        {'type': 'image', 'name': 'mine', 'path': 'src/assets/images/mine.png'},
        {'type': 'image', 'name': 'stone', 'path': 'src/assets/images/stone.png'},
        {'type': 'image', 'name': 'rocket', 'path': 'src/assets/images/rocket.png'}
    ]);
}

loadState.create = function () {

    var controller = this.createController('standard');
    controller.add('UP', 'keyboard', 'ArrowUp');
    controller.add('DOWN', 'keyboard', 'ArrowDown');
    controller.add('LEFT', 'keyboard', 'ArrowLeft');
    controller.add('RIGHT', 'keyboard', 'ArrowRight');
    controller.add('G', 'keyboard', 'g');
    controller.add('H', 'keyboard', 'h');
    controller.add('F', 'keyboard', 'f');


    this.game.stateManager.switch('testState');
}

loadState.update = function () {}
