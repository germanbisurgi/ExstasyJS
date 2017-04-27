var loadState = new Extasy.state('loadState');

loadState.preload = function () {
    this.loadImage('bubbles', 'src/assets/images/bubbles.jpg');
    this.loadImage('tileBackground', 'src/assets/images/tileBackground.png');
    this.loadImage('colorito', 'src/assets/images/colorito.jpg');
    this.loadImage('fantasy', 'src/assets/images/fantasy.jpg');
    this.loadImage('leaf', 'src/assets/images/leaf.jpg');
    this.loadImage('mine', 'src/assets/images/mine.png');
    this.loadImage('mosaic', 'src/assets/images/mosaic.png');
    this.loadImage('numbers', 'src/assets/images/numbers.jpg');
    this.loadImage('pattern', 'src/assets/images/pattern.png');
    this.loadImage('pinkhole', 'src/assets/images/pinkhole.jpg');
    this.loadImage('rainbow', 'src/assets/images/rainbow.jpg');
    this.loadImage('rocket', 'src/assets/images/rocket.png');
    this.loadImage('rowe', 'src/assets/images/rowe.png');
    this.loadImage('space', 'src/assets/images/space.jpg');
    this.loadImage('stellar', 'src/assets/images/stellar.jpg');
    this.loadImage('stone', 'src/assets/images/stone.png');
    this.loadImage('yellow', 'src/assets/images/yellow.jpg');
    this.loadSpriteSheet('player', 'src/assets/images/player.png', 32, 32);
}

loadState.create = function () {
    this.game.stateManager.switch('controllerState');
}

loadState.update = function () {}
