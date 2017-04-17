var Game = function (name, canvas) {

    "use strict";
    var self = this;
    self.name = name;
    self.canvas = document.querySelector(canvas);
    self.frame = 1;
    self.fps = 60;
    self.isPaused = false;
    self.assets = {};
    self.state = null;
    self.input = new Extasy.input();
    self.entities = [];    

    self.stateManager = new Extasy.stateManager(self);
    self.entityManager = new Extasy.entityManager(self);
    self.assetManager = new Extasy.assetManager(self);
    self.cameraManager = new Extasy.cameraManager(self);
    self.renderer = new Extasy.renderer(self);

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
                        self.state.preloaded = true;
                        self.state.preload();
                    }

                    if (!self.state.created && self.state.preloaded && self.assetManager.loadProgress() === 100) {
                        self.state.created = true;
                        self.state.create();
                    }
                    
                    if (self.state.created) {
                        self.state.update();
                    }

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