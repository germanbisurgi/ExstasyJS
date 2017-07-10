var TimeManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.realTime = 0;
    self.lastTime = 0;
    self.currentTime = 0;
    self.delta = 0;
    self.motion = 1;
    self.paused = false;
    self.timers = [];

    self.update = function () {
        self.delta = 0;
        if (!self.paused) {
            self.lastTime = self.currentTime;
            self.currentTime = self.lastTime + Math.floor(self.game.loopManager.delta);
            self.delta = self.currentTime - self.lastTime;
        }
        self.timers.forEach(function (timer) {
            timer.update();
        });
    };

    self.pause = function() {
        self.paused = true;
    };

    self.continue = function() {
        self.paused = false;
    };

    self.pps = function(velocity) {
        return velocity * self.delta / 1000 * self.motion;
    };

    self.dps = function(degrees) {
        return degrees * self.delta / 1000 * self.motion;
    };

};