var spriteState = new Extasy.state('spriteState');
var player;
var myTimer;

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

    myTimer = this.addTimer(1000, true, function() {
        console.log(spriteState.game.timeManager.currentTime);
    });
};

spriteState.update = function () {
    var controller = this.getController('standard');
    if (controller.P.isPressed) {this.pause();}
    if (controller.S.isPressed) {this.continue();}

    player.play('down');
    player.rotate(360);
    player.translate(5, 3);

    myTimer.update();
};