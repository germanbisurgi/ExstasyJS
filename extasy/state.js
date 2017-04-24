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

    // ------------------------------------------------------------------ assets

    self.getAsset = function (assetName) {
        return self.game.assetManager.getAsset(assetName);
    }

    self.loadImage = function (imageName, path) {
        self.game.assetManager.loadImage(imageName, path);
    }

    self.loadSpriteSheet = function (spriteSheetName, path, spriteWidth, spriteHeight) {
        self.game.assetManager.loadSpriteSheet(spriteSheetName, path, spriteWidth, spriteHeight);
    }

    // ---------------------------------------------------------------- entities

    self.listEntities = function (x, y, spriteSheetName) {
        return self.game.entityManager.listEntities();
    }

    self.addSprite = function (x, y, spriteSheetName) {
        var sprite = self.getAsset(spriteSheetName);
        if (sprite) {
            sprite.dx = x;
            sprite.dy = y;
            self.game.entityManager.addEntity(sprite);
            return sprite;
        } else {
            console.log('EXCEPTION: this sprite is not present ->', spriteSheetName);
            console.log('the game will be stoped');
            self.game.stop();
        }
        console.log(sprite);
    }

    // ------------------------------------------------------------------ inputs

    self.getController = function (controllerName) {
        return self.game.inputManager.getController(controllerName);
    }

    self.createController = function (controllerName) {
        return self.game.inputManager.createController(controllerName);
    }

    self.listControllers = function () {
        return self.game.inputManager.listControllers();
    }

    // ------------------------------------------------------------------ camera

    self.moveCamera = function (x, y) {
        self.game.cameraManager.move(x, y);
    }

    self.cameraFollow = function (entity) {
        self.game.cameraManager.cameraFollow(entity);
    }

    self.cameraZoomIn = function () {
        self.game.cameraManager.zoomIn();
    }

    self.cameraZoomOut = function () {
        self.game.cameraManager.zoomOut();
    }

    self.cameraZoomReset = function () {
        self.game.cameraManager.zoomReset();
    }

}