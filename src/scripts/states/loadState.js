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
    //this.switchState('cameraState');
    //this.switchState('inputState');
    //this.switchState('physicsState');
    //this.switchState('primitivesState');
    //this.switchState('spriteState');
    //this.switchState('tileSpriteState');
    //this.switchState('audioState');
    //this.switchState('mathState');
    //this.switchState('timeState');
    //this.switchState('textState');
    //this.switchState('collisionState');
    //this.switchState('poolState');
    //this.switchState('eventState');
    //this.switchState('gameState');
    this.switchState('tweenState');
};