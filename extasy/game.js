var Game = function (width, height, name, canvas) {

    "use strict";
    var self = this;
    self.width = width;
    self.height = height;
    self.name = name;
    self.canvas = document.querySelector(canvas);
    self.frame = 1;
    self.fps = 60;
    self.isPaused = false;
    self.assets = [];
    self.state = null;
    self.entities = [];
    self.controllers = [];

    self.inputManager = new Extasy.inputManager(self);
    self.stateManager = new Extasy.stateManager(self);
    self.entityManager = new Extasy.entityManager(self);
    self.assetManager = new Extasy.assetManager(self);
    self.cameraManager = new Extasy.cameraManager(self);
    self.renderManager = new Extasy.renderManager(self);
    self.physicsManager = new Extasy.physicsManager(self);

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
                        self.assetManager.loadAll();
                    }

                    if (self.state.preloaded && !self.assetManager.loading && !self.state.created) {
                        self.state.created = true;
                        self.state.create();
                    }

                    if (self.state.created) {
                        self.state.update();
                    }

                    self.physicsManager.update();
                    self.physicsManager.draw();
                    //self.renderManager.draw();

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