var Circle = function (game, x, y, r) {

    "use strict";
    var self = this;
    // core components.
    self.game = game;
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.data = null;
    self.events = null;
    self.name = null;
    self.renderable = true;
    self.type = 'circle';
    // shape components.
    self.fillStyle  = 'grey';
    self.strokeStyle = 'black';
    self.lineWidth = 0;
    self.image = null;
    self.sx = 0;
    self.sy = 0;
    self.sw = r * 2;
    self.sh = r * 2;
    self.dx = x;
    self.dy = y;
    self.dw = r * 2;
    self.dh = r * 2;
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
        tmpCanvas.width = r * 2;
        tmpCanvas.height = r * 2;
        var tmpContext = tmpCanvas.getContext('2d');
        tmpContext.fillStyle = self.fillStyle;
        tmpContext.strokeStyle = self.strokeStyle;
        tmpContext.lineWidth = self.lineWidth;
        tmpContext.beginPath();
        tmpContext.arc(r, r, r - self.lineWidth, 0, 2 * Math.PI, false);
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

};