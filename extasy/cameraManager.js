var CameraManager = function (game) {

    "use strict";
    var self = this;
    
    self.game = game;
    self.angle = 10;
    self.x = 0;
    self.y = 0;
    self.w = game.width;
    self.h = game.height;
    self.ax = 0.5;
    self.ay =  0.5;
    self.zoom = 1.0;
    self.angle = 0;

    self.move = function (x, y) {
        self.x = x;
        self.y = y;
    }

    self.cameraFollow = function(e) {
        self.game.cameraManager.move(
            (self.game.width / 2 - e.dx - (e.dw * e.ax)),
            (self.game.height / 2 - e.dy - (e.dh * e.ay))
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

    self.rotate = function (degrees) {
        self.angle += degrees / game.fps * game.motion;
        self.angle %= 360;
    }

    self.setAngle = function (degrees) {
        self.angle = degrees % 360;
    }

}