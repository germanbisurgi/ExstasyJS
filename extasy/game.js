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
    self.assets = {};
    self.assets2 = [];
    self.state = null;
    self.entities = [];
    self.controllers = [];

    self.inputManager = new Extasy.inputManager(self);
    self.stateManager = new Extasy.stateManager(self);
    self.entityManager = new Extasy.entityManager(self);
    self.assetManager2 = new Extasy.assetManager2(self);
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

                    console.log('----------------PRE PRELOAD');
                    console.log('state', self.state.name);
                    console.log('preloaded', self.state.preloaded);
                    console.log('created', self.state.created);
                    console.log('progress', self.assetManager2.loadProgress());

                    if (!self.state.preloaded) {
                        self.state.preloaded = true;
                        self.assetManager2.init();
                        self.state.preload();
                        self.assetManager2.loadAll();
                    }

                    console.log('----------------POST PRELOAD');
                    console.log('state', self.state.name);
                    console.log('preloaded', self.state.preloaded);
                    console.log('created', self.state.created);
                    console.log('progress', self.assetManager2.loadProgress());

                    if (self.state.preloaded && self.assetManager2.loadProgress() === 100 && !self.state.created) {
                        self.assetManager2.init();
                        self.state.created = true;
                        self.state.create();
                    }

                    console.log('----------------POST CREATE');
                    console.log('state', self.state.name);
                    console.log('preloaded', self.state.preloaded);
                    console.log('created', self.state.created);
                    console.log('progress', self.assetManager2.loadProgress());
                    
                    if (self.state.created) {
                        self.state.update();
                    }

                    self.physicsManager.update();
                    self.physicsManager.draw();
                    self.renderManager.draw();

                    console.log('----------------END');
                    console.log('state', self.state.name);
                    console.log('preloaded', self.state.preloaded);
                    console.log('created', self.state.created);
                    console.log('progress', self.assetManager2.loadProgress());
                    console.log('---------------------------------------------------');

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