var spriteState = new Extasy.state('spriteState');
var player;

spriteState.create = function () {
    player = this.addSprite(0, 50, 'player');
    player.addAnimation('up', [37, 38, 37, 36], 100);
    player.addAnimation('right', [25, 26, 25, 24], 100);
    player.addAnimation('down', [1, 2, 1, 0], 100);
    player.addAnimation('left', [13, 14, 13, 12], 100);
    player.scale(1.1, 1.1);
    player.shadow(3, 3, 3, 'rgba(0, 0, 0, 0.5)');
    player.opacity(1);
    player.setAngle(10);
    player.translate(50, 50);
    this.addText(15, 15, 400, 50, 'Press P to pause the time and S to start the time', false);
};

spriteState.update = function () {
    if (this.pressing('p')) {this.pause();}
    if (this.pressing('s')) {this.continue();}
    player.play('down');
    player.rotate(360);
    player.translate(5, 3);
};