var TextField = function (game, x, y, text, style) {

    "use strict";
    var self = this;
    // core components.
    self.game = game;
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.name = null;
    self.renderable = true;
    self.type = 'text';
    self.fillStyle  = style.fillStyle ? style.fillStyle : 'grey';
    self.strokeStyle = style.fillStyle ? style.strokeStyle : 'red';
    self.lineWidth = style.lineWidth ? style.lineWidth : 10;
    self.font = style.font ? style.font : '16px Helvetica';
    self.textAlign = style.textAlign ? style.textAlign : 'start';
    self.textBaseline = style.textBaseline ? style.textBaseline : 'top';
    self.text = text;
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
        tmpContext.textAlign = self.textAlign;
        tmpContext.textBaseline = self.textBaseline;
        tmpContext.font = self.font;
        tmpContext.strokeStyle = self.strokeStyle;
        tmpContext.lineWidth = self.lineWidth;
        tmpContext.strokeText(self.text, 0, 0);
        tmpContext.fillStyle = self.fillStyle;
        tmpContext.fillText(self.text, 0, 0);
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