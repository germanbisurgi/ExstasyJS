var Texture = function (image, game) {

    "use strict";
    var self = this;
    self.game = game;
    // core components.
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.data = null;
    self.events = null;
    self.name = null;
    self.renderable = true;
    self.type = 'image';
    // sprite components.
    self.image = image;
    self.sx = 0;
    self.sy = 0;
    self.sw = image.width;
    self.sh = image.height;
    self.dx = 0;
    self.dy = 0;
    self.dw = image.width;
    self.dh = image.height;
    self.ax = 0.5;
    self.ay =  0.5;
    self.angle = 0;
    self.opacity = 1.0;
    self.shadow = {};


    self.destroy = function () {
        var index = game.entityManager.entities.indexOf(self);
        if (index > -1) {
            game.entityManager.entities.splice(index, 1);
        }
    };

    self.isOffCanvas = function() {
        return self.dx + self.dw <= 0 || self.dy + self.dh <= 0 || self.dx >= game.width || self.dy >= game.height;
    };

    self.opacity = function (opacity) {
        self.opacity = opacity;
    };

    self.rotate = function (degrees) {
        self.angle += self.game.timeManager.dps(degrees);
        self.angle %= 360;
    };

    self.setAngle = function (degrees) {
        self.angle = degrees % 360;
    };

    self.anchorPoint = function (x, y) {
        self.ax = x;
        self.ay = y;
    } ;

    self.scale = function (x, y) {
        self.dw *= x;
        self.dh *= y;
    };

    self.shadow = function (x, y, blur, color) {
        self.shadow = {x: x, y: y, blur: blur, color: color};
    };

    self.translate = function (x, y) {
        self.dx += self.game.timeManager.pps(x);
        self.dy += self.game.timeManager.pps(y);
    };

};