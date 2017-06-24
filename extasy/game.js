var Game = function (width, height, name, canvas) {

    "use strict";
    var self = this;
    self.width = width;
    self.height = height;
    self.name = name;
    self.canvas = document.querySelector('.canvas');
    self.now = null;
    self.isPaused = false;
    self.fps = 70;
    self.entities = [];
    self.state = null;
    self.data = {};

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

    self.loopLogic = function () {
        if (self.assetManager.loading) {
            document.querySelector('.loading-screen-progress').textContent = self.assetManager.loadProgress();
            document.querySelector('.loading-screen').classList.remove("loading-screen-loaded");
        }
        
        if (!self.state.preloaded) {
            self.state.preloaded = true;
            self.state.preload();
            self.assetManager.loadAll();
        }
        if (self.state.preloaded && !self.assetManager.loading && !self.state.created) {
            document.querySelector('.loading-screen').classList.add("loading-screen-loaded");
            self.state.created = true;
            self.state.create();
        }
        if (self.state.created) {
            self.state.update();
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
            //self.renderManager.draw(self.entityManager.entities);
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