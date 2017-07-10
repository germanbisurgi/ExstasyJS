var Game = function (width, height, name, canvas) {

    "use strict";
    var self = this;
    self.width = width;
    self.height = height;
    self.name = name;
    self.canvas = document.querySelector('.canvas');
    self.fps = 70;

    self.mathManager = new Extasy.mathManager(self);
    self.loopManager = new Extasy.loopManager(self.fps);
    self.inputManager = new Extasy.inputManager(self);
    self.stateManager = new Extasy.stateManager(self);
    self.entityManager = new Extasy.entityManager(self);
    self.assetManager = new Extasy.assetManager(self);
    self.cameraManager = new Extasy.cameraManager(self);
    self.renderManager = new Extasy.renderManager(self);
    self.physicsManager = new Extasy.physicsManager(self);
    self.timeManager = new Extasy.timeManager(self);
    self.collisionManager = new Extasy.collisionManager(self);
    self.eventManager = new Extasy.eventManager(self);

    self.loopLogic = function () {
        if (self.assetManager.loading) {
            document.querySelector('.loading-screen-progress').textContent = self.assetManager.loadProgress() + '%';
            document.querySelector('.loading-screen').classList.remove("loading-screen-loaded");
        }
        
        if (!self.stateManager.state.preloaded) {
            self.stateManager.state.preloaded = true;
            self.stateManager.state.preload();
            self.assetManager.loadAll();
        }
        if (self.stateManager.state.preloaded && !self.assetManager.loading && !self.stateManager.state.created) {
            document.querySelector('.loading-screen').classList.add("loading-screen-loaded");
            self.stateManager.state.created = true;
            self.stateManager.state.create();
        }
        if (self.stateManager.state.created) {
            self.stateManager.state.update();
        }
        if (!self.timeManager.paused) {
            if (self.collisionManager.enabled) {
                self.collisionManager.update();
            }
            if (self.physicsManager.enabled) {
                self.physicsManager.update();
            }
            if (self.physicsManager.debugMode) {
                self.physicsManager.draw();
            }
            self.renderManager.draw(self.entityManager.list());
        }
        self.timeManager.realTime = Date.now();
        self.timeManager.update();
    };

    self.interval = function (rate, fn) {
        if (self.loopManager.frame % Math.ceil((60 / rate) / (60 / self.loopManager.fps) / self.loopManager.motion) === 0) {
            fn();
        }
    };

    self.run = function() {
        self.loopManager.run(self.loopLogic);
    };

};