var Rectangle = function (game, x, y, w, h) {

    "use strict";
    var self = this;
    // core components.
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.data;
    self.events;
    self.name = null;
    self.renderable = true;
    self.type = 'rectangle';
    // shape components.
    self.fillStyle  = 'grey';
    self.strokeStyle = 'black';
    self.lineWidth = 1;
    self.image;
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
    }

    self.prerender = function() {
        var tmpCanvas = document.createElement('canvas');
        var tmpContext = tmpCanvas.getContext('2d');
        tmpCanvas.width = self.sw;
        tmpCanvas.height = self.dh;
        tmpContext.fillStyle = self.fillStyle;
        tmpContext.strokeStyle = self.strokeStyle;
        tmpContext.lineWidth = self.lineWidth;
        tmpContext.beginPath();
        tmpContext.rect(self.dx, self.dy, self.sw, self.dh);
        tmpContext.fill();
        tmpContext.stroke();
        self.image = tmpCanvas;
    }

    self.destroy = function () {
        var index = game.entities.indexOf(self);
        if (index > -1) {
            game.entities.splice(index, 1);
        }
    }

    self.isOffCanvas = function() {
        return self.dx + self.sw <= 0
            || self.dy + self.dh <= 0
            || self.dx >= game.width
            || self.dy >= game.height;
    };

    self.opacity = function (opacity) {
        self.opacity = opacity;
    }

    self.rotate = function (degrees) {
        self.angle += degrees / game.fps * game.motion;
        self.angle %= 360;
    }

    self.setAngle = function (degrees) {
        self.angle = degrees % 360;
    }

    self.anchorPoint = function (x, y) {
        self.ax = x;
        self.ay = y;
    } 

    self.scale = function (x, y) {
        self.sw *= x;
        self.dh *= y;
    }

    self.shadow = function (x, y, blur, color) {
        self.shadow = {x: x, y: y, blur: blur, color: color};
    }

    self.translate = function (x, y) {
        self.dx += game.toPPS(x);
        self.dy += game.toPPS(y);
    }

}