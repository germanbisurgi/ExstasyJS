var TimeManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.realTime = 0;
    self.lastTime = 0;
    self.currentTime = 0;
    self.paused = 0;

    self.update = function () {
        if (!self.paused) {
            self.lastTime = self.currentTime;
            self.currentTime = self.lastTime + Math.floor(self.game.loopManager.delta);
        }
    };

    self.pause = function() {
        self.paused = true;
    };

    self.continue = function() {
        self.paused = false;
    };

};