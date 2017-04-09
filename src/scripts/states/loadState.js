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

loadState.create = function () {}

loadState.update = function () {

    // console.log(this.game.input);
    // this.game.stop();

    input.textContent = '';

    for (key in this.game.input.keyboard) {
        if (key.isPressed) {
            input.textContent += key + ', ';
        }
    }

    if (this.game.input.mouse.left.isPressed) {
        input.textContent += 'mouse left, ';
    }

    if (this.game.input.mouse.middle.isPressed) {
        input.textContent += 'mouse middle, ';
    }

    if (this.game.input.mouse.right.isPressed) {
        input.textContent += 'mouse right, ';
    }

    mouseX.textContent = '';
    mouseY.textContent = '';
    mouseX.textContent += this.game.input.mouse.x;
    mouseY.textContent += this.game.input.mouse.y;

    // this.game.stop();

}
