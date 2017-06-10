var timeState = new Extasy.state('timeState');
var player;
var myTimer;

timeState.create = function () {
    player = this.addSprite(50, 50, 'player');
    var callback = function() {console.log('banane');};
    myTimer = this.createTimer(5000, callback, false);
};

timeState.update = function () {
    player.rotate(60);
    var controller = this.getController('standard');
    if (controller.P.isPressed) {timeState.game.timeManager.pause();}
    if (controller.S.isPressed) {timeState.game.timeManager.continue();}
    myTimer.update();
    //console.log('Timer', myTimer.delay);
    console.log('Timer', timeState.game.timeManager.currentTime);

};
