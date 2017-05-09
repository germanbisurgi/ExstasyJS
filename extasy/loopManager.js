var LoopManager = function (fps) {
    
    "use strict";
    var self = this;
    self.now = null;
    self.frame = 1;
    self.fps = fps;
    self.motion = 1;
    self.isPaused = false;

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    self.run = function(loopLogic) {
        var lastTime = 0;
        var requiredElapsed = 1000 / self.fps;
        function tick(now) {
            requestAnimFrame(tick);
            if (!self.isPaused) {
                if (!lastTime) {
                    lastTime = Math.floor(now);
                }
                self.delta = now - lastTime;   
                if (self.delta > requiredElapsed) {
                    loopLogic();
                    self.frame++;
                    lastTime = Math.floor(now);
                }
            }
        }
        requestAnimFrame(tick);
    };

    self.continue = function() {
        self.isPaused = false;
    };

    self.stop = function() {
        self.isPaused = true;
    };

    self.toPPS = function(velocity) {
        return velocity * self.delta / 1000 * self.motion;
    };
};