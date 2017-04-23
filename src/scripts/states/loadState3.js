var loadState3 = new Extasy.state('loadState3');

loadState3.preload = function () {
    this.loadImage('bubbles', 'src/assets/images/bubbles.jpg');
    this.loadImage('colorito', 'src/assets/images/colorito.jpg');
    this.loadImage('fantasy', 'src/assets/images/fantasy.jpg');
    this.loadImage('leaf', 'src/assets/images/leaf.jpg');
    this.loadImage('mine', 'src/assets/images/mine.png');
}

loadState3.create = function () {
    this.game.stateManager.switch('testState');
}

loadState3.update = function () {}
