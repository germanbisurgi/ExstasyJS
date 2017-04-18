var State = function (name) {

    "use strict";
    var self = this;
    self.name = name;
    self.game = null;
    self.preloaded = false;
    self.created = false;

    self.preload = function () {}
    self.create = function () {}
    self.update = function () {}

    // ---------------------------------------------------------------- entities

    self.getEntity = function(entityName) {
        return self.game.entityManager.getEntity(entityName);
    }

    self.createEntity = function(entDef) {
        return self.game.entityManager.createEntity(entDef);
    }

    // ------------------------------------------------------------------ inputs

    self.getController = function(controllerName) {
        return self.game.inputManager.getController(controllerName);
    }

    self.createController = function(controllerName) {
        return self.game.inputManager.createController(controllerName);
    }

    self.listControllers = function() {
        return self.game.inputManager.listControllers();
    }

    // ------------------------------------------------------------------ camera

    self.moveCamera = function(x, y) {
        self.game.cameraManager.move(x, y);
    }

    self.cameraZoomIn = function() {
        self.game.cameraManager.zoomIn();
    }

    self.cameraZoomOut = function() {
        self.game.cameraManager.zoomOut();
    }

    self.cameraZoomReset = function() {
        self.game.cameraManager.zoomReset();
    }

}