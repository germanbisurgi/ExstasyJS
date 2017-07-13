var Rectangle = function (x, y, w, h, game) {

    "use strict";
    var self = this;
    // core components.
    self.game = game;
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.data = null;
    self.events = null;
    self.name = null;
    self.renderable = true;
    self.type = 'rectangle';
    // shape components.
    self.fillStyle  = 'grey';
    self.strokeStyle = 'black';
    self.lineWidth = 0;
    self.image = null;
    self.sx = 0;
    self.sy = 0;
    self.sw = w;
    self.sh = h;
    self.dx = x;
    self.dy = y;
    self.dw = w;
    self.dh = h;
    self.ax = 0.5;
    self.ay =  0.5;
    self.angle = 0;
    self.opacity = 1.0;
    self.shadow = {};

    self.fill = function (fill) {
        self.fillStyle = fill;
        self.prerender();
    };

    self.prerender = function() {
        var tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = w;
        tmpCanvas.height = h;
        var tmpContext = tmpCanvas.getContext('2d');
        tmpContext.fillStyle = self.fillStyle;
        tmpContext.strokeStyle = self.strokeStyle;
        tmpContext.lineWidth = self.lineWidth;
        tmpContext.beginPath();
        tmpContext.rect(self.sx, self.sy, self.sw, self.sh);
        tmpContext.fill();
        if (self.lineWidth > 0) {tmpContext.stroke();} 
        self.image = tmpCanvas;
    };

    self.destroy = function () {
        var index = self.game.entityManager.entities.indexOf(self);
        if (index > -1) {
            self.game.entityManager.entities.splice(index, 1);
        }
    };

    self.isOffCanvas = function() {
        return self.dx + self.sw <= 0 || self.dy + self.dh <= 0 || self.dx >= self.game.width || self.dy >= self.game.height;
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

    self.position = function (x, y) {
        self.dx = x;
        self.dy = y;
    };

};