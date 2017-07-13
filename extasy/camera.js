var Camera = function (name, game) {

    "use strict";
    var self = this;
    
    self.game = game;
    self.name = name;
    self.angle = 10;
    self.x = 0;
    self.y = 0;
    self.w = self.game.width;
    self.h = self.game.height;
    self.ax = 0.5;
    self.ay =  0.5;
    self.lerp = 1;
    self.zoom = 1.0;
    self.angle = 0;
    self.opacity = 0.0;
    self.lens = 'rgba(0, 0, 0,' + self.opacity + ')';

    self.move = function (x, y) {
        self.x = x;
        self.y = y;
    };

    self.follow = function(e) {
        if (self.lerp < 1) { self.lerp = 1;}
        self.x += ((self.game.width  / 2 - (e.dx + e.dw * 0.5)  * self.zoom) - self.x) / self.lerp;
        self.y += ((self.game.height / 2 - (e.dy + e.dh * 0.5)  * self.zoom) - self.y) / self.lerp;
    };

    self.zoomReset = function () {
        self.zoom = 1.0;
    };

    self.zoomIn = function (px) {
        self.zoom += self.game.timeManager.pps(px) / 100;
        if (self.zoom > 3) {
            self.zoom = 3;
        }
    };

    self.zoomOut = function (px) {
        self.zoom -= self.game.timeManager.pps(px) / 100;
        if (self.zoom < 0.3) {
            self.zoom = 0.3;
        }
    };

    self.rotate = function (degrees) {
        self.angle += self.game.timeManager.dps(degrees);
        self.angle %= 360;
    };

    self.setAngle = function (degrees) {
        self.angle = degrees % 360;
    };

    self.setLerp = function (lerp) {
        self.lerp = lerp;
    };

};