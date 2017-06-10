var timeState = new Extasy.state('timeState');

var player;
var Timer;
var myTimer

timeState.create = function () {
    player = this.addSprite(50, 50, 'player');
    Timer = function (delay, callback, repeat) {
        var self = this;
        self.originalDelay = delay;
        self.delay = self.originalDelay;
        self.repeat = repeat;

        self.update = function () {
            if (self.delay <= 0) {
                callback();
                self.delay = 0;
                if (self.repeat) {
                    self.delay = self.originalDelay;
                }
            } else {
                self.delay -= timeState.game.timeManager.delta;
            }
        };
    };

    var callback = function() {
        console.log('banane');
    };

    myTimer = new Timer(5000, callback, false);
};

timeState.update = function () {
    player.rotate(60);
    var controller = this.getController('standard');
    if (controller.P.isPressed) {timeState.game.timeManager.pause();}
    if (controller.S.isPressed) {timeState.game.timeManager.continue();}
    myTimer.update();
    console.log('Game Time', timeState.game.timeManager.currentTime, 'Timer', myTimer.delay);

};
