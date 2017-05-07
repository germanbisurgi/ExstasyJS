var Timer = function (game) {

    "use strict";
    var self = this;
    self.active = true;
    self.startTime = game.timeManager.now;
    self.elapsed = {};

    self.now = function () {
        return game.timeManager.now;
    };

    self.reset = function () {
        self.startTime = game.timeManager.now;
    };

    self.elapsed = function () {
        self.elapsed.milliseconds = self.now() - self.startTime;
        self.elapsed.seconds = Math.floor(self.elapsed.milliseconds / 1000);
        self.elapsed.minutes = Math.floor(self.elapsed.seconds / 60);
        self.elapsed.hours = Math.floor(self.elapsed.minutes / 60);
        self.elapsed.days = Math.floor(self.elapsed.hours / 24);
        return  self.elapsed;
    };

    self.loop = function (delay, callback) {
        if (self.elapsed().milliseconds > delay) {
            callback();
            self.reset();
        } 
    };

    self.destroy = function () {
        self.active = false;
    };

};