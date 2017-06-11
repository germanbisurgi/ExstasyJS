var timeState = new Extasy.state('timeState');
var player;
var myTimer;
var mountains;

timeState.create = function () {
    player = this.addSprite(0, 0, 'player');
    player.addAnimation('left', [13, 14, 13, 12], 100);
    mountains = this.addTileSprite(0, 200, 400, 200, 'mountains');
    var callback = function() {console.log('banane');};
    myTimer = this.createTimer(5000, callback, false);
};

timeState.update = function () {
    player.rotate(60);
    player.translate(5, 0);
    player.play('left');
    mountains.scroll('left', 20);


    var controller = this.getController('standard');
    if (controller.P.isPressed) {timeState.game.timeManager.pause();}
    if (controller.S.isPressed) {timeState.game.timeManager.continue();}
    myTimer.update();

};
