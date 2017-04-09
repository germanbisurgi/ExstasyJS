var Game = function (name, progress) {

    "use strict";
    var self = this;
    self.name = name;
    self.frame = 1;
    self.fps = 60;
    self.isPaused = false;
    self.assets = [];
    self.state = null;
    self.input = new Extasy.input();    

    self.stateManager = new Extasy.stateManager(self);
    self.assetManager = new Extasy.assetManager(self);

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


                    if (!self.state.preloaded) {
                        self.state.preload();
                        self.state.preloaded = true;
                    }

                    if (!self.state.created && self.state.preloaded && self.assetManager.loadProgress() === 100) {
                        self.state.create();
                        self.state.created = true;
                    }
                    
                    if (self.state.created) {
                        self.state.update();
                    }

                    // progress.textContent += self.assetManager.loadProgress() + ', ';
                    // console.log('frame: ', self.frame, ' loaing: ', self.assetManager.loadProgress(), '%');
                    
                    self.frame++;

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