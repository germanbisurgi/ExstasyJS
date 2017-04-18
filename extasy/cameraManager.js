var CameraManager = function (game) {

    "use strict";
    var self = this;

    self.game = game;
    self.x = 0;
    self.y = 0;
    self.zoom = 1.0;

    self.move = function (x, y) {
        self.x = x;
        self.y = y;
    }

    self.cameraFollow = function(entity) {
        self.game.cameraManager.move(
            (self.game.renderManager.width / 2 / self.game.cameraManager.zoom - entity.position.x - entity.size.w / 2),
            (self.game.renderManager.height / 2 / self.game.cameraManager.zoom - entity.position.y - entity.size.h / 2)
        );
    }

    self.zoomReset = function () {
        self.zoom = 1.0;
    }

    self.zoomIn = function () {
        self.zoom += 0.05;
        if (self.zoom > 3) {
            self.zoom = 3;
        }
    }

    self.zoomOut = function () {
        self.zoom -= 0.05;
        if (self.zoom < 0.3) {
            self.zoom = 0.3;
        }
    }

}