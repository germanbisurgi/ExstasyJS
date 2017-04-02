var Game = function (name) {

    "use strict";
    var self = this;
    self.name = name;
    self.fps = 60;
    self.isPaused = false;
    self.state = null;
    self.assets = [];

    self.stateManager = new StateManager(self);
    self.assetManager = new AssetManager(self);

    self.run = function() {
        var lastTime = 0;
        var requiredElapsed = 1000 / self.fps;
        function tick(now) {

            requestAnimationFrame(tick);

            if (!self.isPaused) {
                if (!lastTime) {
                    lastTime = Math.floor(now);
                }
                self.delta = now - lastTime;   

                if (self.delta > requiredElapsed) {

                    if (!self.assetManager.finished) {
                        self.state.preload();
                    } else {
                        self.state.preloaded = true;
                        self.stop();
                    }

                    // console.log("state preloaded", self.state.preloaded);
                    
                    self.state.create();
                    self.state.update();
                    lastTime = Math.floor(now);
                }
            }
        }
        requestAnimationFrame(tick);
    }

    self.stop = function() {
        self.isPaused = true;
    }

    self.continue = function() {
        self.isPaused = false;
    }

}