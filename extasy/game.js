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

                    console.log('current state is: ', self.state.name)
                    console.log('preloaded? : ', self.state.preloaded)

                    if (!self.state.preloaded) {
                        console.log('preloaddddddddddddddddddddddddddddddddddd')
                        self.state.preload();
                    }

                    console.log('created?: ', self.state.created)
                    
                    if (!self.state.created && self.state.preloaded) {
                        console.log('createeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
                        self.state.create();
                        self.state.created = true;
                    }
                    
                    if (self.state.created) {
                        console.log('updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
                        self.state.update();
                    }

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