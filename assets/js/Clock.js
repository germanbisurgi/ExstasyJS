var Clock = function() {
    "use strict";
    var self = this;

    self.time = 0;
    self.frames = 0;

    self.sync = function() {
        var time = new Date();
        self.time = time.getTime();
        self.frames++;
    }

}