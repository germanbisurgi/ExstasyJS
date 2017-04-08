var loadState = new Extasy.state('loadState');

loadState.preload = function () {
    this.game.assetManager.loadAssets([
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

    var controller = {
        up:    new Extasy.input('up'),
        right: new Extasy.input('right'),
        down:  new Extasy.input('down'),
        left:  new Extasy.input('left')
    }
    this.controller = controller;
     

}

loadState.update = function () {
    var up = this.controller.up;
    var right = this.controller.right;
    var down = this.controller.down;
    var left = this.controller.left;


    if (up.isPressed) {
        console.log('pressing up');
    }

    if (right.isPressed) {
        console.log('pressing right');
    }

    if (down.isPressed) {
        console.log('pressing down');
    }

    if (left.isPressed) {
        console.log('pressing left');
    }


    // this.game.stop();
}
