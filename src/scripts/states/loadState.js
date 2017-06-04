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
    this.loadImage('snow', 'src/assets/images/snow.png');
    this.loadImage('space', 'src/assets/images/space.jpg');
    this.loadImage('stellar', 'src/assets/images/stellar.jpg');
    this.loadImage('stone', 'src/assets/images/stone.png');
    this.loadImage('yellow', 'src/assets/images/yellow.jpg');
    this.loadImage('mountains', 'src/assets/images/mountains.png');
    this.loadSpriteSheet('player', 'src/assets/images/player.png', 32, 32);
};

loadState.create = function () {
    // create a controller and define it inputs.
    var controller = this.createController('standard');
    controller.add('UP', 'keyboard', 'ArrowUp');
    controller.add('DOWN', 'keyboard', 'ArrowDown');
    controller.add('LEFT', 'keyboard', 'ArrowLeft');
    controller.add('RIGHT', 'keyboard', 'ArrowRight');
    controller.add('G', 'keyboard', 'g');
    controller.add('H', 'keyboard', 'h');
    controller.add('F', 'keyboard', 'f');
    controller.add('A', 'keyboard', 'a');
    controller.add('S', 'keyboard', 's');
    controller.add('num1', 'keyboard', 'num1');
    controller.add('num2', 'keyboard', 'num2');
    controller.add('num3', 'keyboard', 'num3');
    this.game.stateManager.switch('cameraState');
    //this.game.stateManager.switch('inputState');
    //this.game.stateManager.switch('physicsState');
    //this.game.stateManager.switch('primitivesState');
    //this.game.stateManager.switch('spriteState');
    //this.game.stateManager.switch('tileSpriteState');
};