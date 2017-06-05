var loadState = new Extasy.state('loadState');

loadState.preload = function () {
    this.loadImage('tileBackground', 'src/assets/images/tileBackground.png');
    this.loadImage('clouds', 'src/assets/images/clouds.jpg');
    this.loadImage('grass', 'src/assets/images/grass.jpg');
    this.loadImage('mine', 'src/assets/images/mine.png');
    this.loadImage('pattern', 'src/assets/images/pattern.png');
    this.loadImage('rocket', 'src/assets/images/rocket.png');
    this.loadImage('snow', 'src/assets/images/snow.png');
    this.loadImage('stone', 'src/assets/images/stone.png');
    this.loadImage('mountains', 'src/assets/images/mountains.png');
    this.loadSpriteSheet('player', 'src/assets/images/player.png', 32, 32);
    this.loadSpriteSheet('tanks', 'src/assets/images/tanks.png', 32, 32);
    this.loadAudio('laser', 'src/assets/audio/laser.wav');
    this.loadAudio('shot', 'src/assets/audio/shot.wav');
    this.loadAudio('motor', 'src/assets/audio/motor.wav');
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
    controller.add('SPACEBAR', 'keyboard', 'Spacebar');
    
    //this.game.stateManager.switch('cameraState');
    //this.game.stateManager.switch('inputState');
    //this.game.stateManager.switch('physicsState');
    //this.game.stateManager.switch('primitivesState');
    //this.game.stateManager.switch('spriteState');
    //this.game.stateManager.switch('tileSpriteState');
    this.game.stateManager.switch('audioState');
};