var Game = function (width, height, name, canvas) {

    "use strict";
    var self = this;
    self.width = width;
    self.height = height;
    self.name = name;
    self.canvas = document.querySelector(canvas);
    self.now = null;
    self.frame = 1;
    self.fps = 70;
    self.motion = 1;
    self.isPaused = false;
    self.assets = [];
    self.entities = [];
    self.controllers = [];
    self.state = null;    

    self.loopManager = new Extasy.loopManager(self);
    self.inputManager = new Extasy.inputManager(self);
    self.stateManager = new Extasy.stateManager(self);
    self.entityManager = new Extasy.entityManager(self);
    self.assetManager = new Extasy.assetManager(self);
    self.cameraManager = new Extasy.cameraManager(self);
    self.renderManager = new Extasy.renderManager(self);
    self.physicsManager = new Extasy.physicsManager(self);
    self.timeManager = new Extasy.timeManager(self);

    self.loopLogic = function () {
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
            // check events.
            self.state.update();
        }
        //self.physicsManager.update();
        //self.physicsManager.draw();
        self.renderManager.draw(self.entities);
        self.timeManager.now = Date.now();
    };

    self.interval = function (rate, fn) {
        if (self.frame % Math.ceil((60 / rate) / (60 / self.fps) / self.motion) === 0) {
            fn();
        }
    };

    self.run = function() {
        self.loopManager.run(self.loopLogic);
    };

    self.stop = function() {
        self.isPaused = true;
    };

    self.toPPS = function(velocity) {
        return self.loopManager.toPPS(velocity);
    };

    self.continue = function() {
        self.isPaused = false;
    };

};