var Timer = function (delay, repeat, callback, game) {
    var self = this;
    self.game = game;
    self.active = true;
    self.originalDelay = delay;
    self.delay = self.originalDelay;
    self.repeat = repeat;

    self.update = function () {
        if (self.active) {
            self.delay -= self.game.timeManager.delta;
            if (self.delay <= 0) {
                callback();
                if (self.repeat) {
                    self.delay = self.originalDelay;
                } else {
                    self.active = false;
                    self.delay = 0;
                }
            }
        }
    };
};