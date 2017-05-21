var Polygon = function (game, x, y, points) {

    "use strict";
    var self = this;
    // core components.
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.data = null;
    self.events = null;
    self.name = null;
    self.renderable = true;
    self.type = 'polygon';
    // shape components.
    self.fillStyle  = 'grey';
    self.strokeStyle = 'black';
    self.lineWidth = 0;
    self.image = null;
    self.sx = 0;
    self.sy = 0;
    self.sw = null;
    self.sh = null;
    self.dx = x;
    self.dy = y;
    self.dw = null;
    self.dh = null;
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
        var tmpContext = tmpCanvas.getContext('2d');
        tmpContext.fillStyle = self.fillStyle;
        tmpContext.strokeStyle = self.strokeStyle;
        tmpContext.lineWidth = self.lineWidth;
        tmpContext.beginPath();
        tmpContext.moveTo(0, 0);
        points.forEach(function (point) {
            tmpContext.lineTo(point.x, point.y);
            if (point.x > self.sw) {
                self.sw = point.x;
                self.dw = point.x;
            }
            if (point.y > self.sh) {
                self.sh = point.y;
                self.dh = point.y;
            }
        });
        tmpContext.fill();
        tmpContext.closePath();

        if (self.lineWidth > 0) {tmpContext.stroke();} 
        self.image = tmpCanvas;
    };

    self.destroy = function () {
        var index = game.entityManager.entities.indexOf(self);
        if (index > -1) {
            game.entityManager.entities.splice(index, 1);
        }
    };

    self.isOffCanvas = function() {
        return self.dx + self.sw <= 0 || self.dy + self.dh <= 0 || self.dx >= game.width || self.dy >= game.height;
    };

    self.opacity = function (opacity) {
        self.opacity = opacity;
    };

    self.rotate = function (degrees) {
        self.angle += degrees / game.loopManager.fps * game.loopManager.motion;
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
        self.dx += game.loopManager.toPPS(x);
        self.dy += game.loopManager.toPPS(y);
    };

};