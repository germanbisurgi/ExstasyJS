var TimeManager = function (game) {

    "use strict";
    var self = this;
    self.now = null;
    self.timerPool = [];

    self.addTimer = function() {
        var recicledTimer = self.recicleTimer();
        var timer;
        if (recicledTimer) {
            timer = recicledTimer;
            timer.active = true;
        } else {
            timer = new Extasy.timer(game);
            self.timerPool.push(timer);
        }
        return timer;
    };

    self.recicleTimer = function () {
        var output = false;
        self.timerPool.forEach(function (timer) {
            if (!timer.active) {
                output = timer;
            }
        });
        return output;
    };

};