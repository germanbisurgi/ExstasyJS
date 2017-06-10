var spriteState = new Extasy.state('spriteState');
var player;
var player2;

spriteState.create = function () {
    player = this.addSprite(320, 50, 'player');
    player.addAnimation('up', [37, 38, 37, 36], 10);
    player.addAnimation('right', [25, 26, 25, 24], 10);
    player.addAnimation('down', [1, 2, 1, 0], 10);
    player.addAnimation('left', [13, 14, 13, 12], 10);
    player.scale(1.1, 1.1);
    player.shadow(3, 3, 3, 'rgba(0, 0, 0, 0.5)');
    player.opacity(1);
    player.setAngle(10);
    player.translate(50, 50);

    player2 = this.addSprite(300, 0, 'player');
    player2.addAnimation('up', [37, 38, 37, 36], 10);
    player2.addAnimation('right', [25, 26, 25, 24], 10);
    player2.addAnimation('down', [1, 2, 1, 0], 10);
    player2.addAnimation('left', [13, 14, 13, 12], 10);
    player2.scale(1.1, 1.1);
    player2.shadow(3, 3, 3, 'rgba(0, 0, 0, 0.5)');
    player2.opacity(1);
    player2.setAngle(10);
    player2.translate(20, 20);
};

spriteState.update = function () {
    player.play('down');
    player.rotate(1);

    player2.play('left');
    player2.rotate(1);

};