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

    self.getEntity = function(entityName) {
        return self.game.entityManager.getEntity(entityName);
    }

    self.createEntity = function(entDef) {
        return self.game.entityManager.createEntity(entDef);
    }

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