var Rectangle = function (game) {

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
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.ax = 0.5;
    self.ay =  0.5;
    self.angle = 0;
    self.opacity = 1.0;
    self.shadow = {};

    self.destroy = function () {
        var index = game.entities.indexOf(self);
        if (index > -1) {
            game.entities.splice(index, 1);
        }
    }

    self.isOffCanvas = function() {
        return self.x + self.w <= 0
            || self.y + self.h <= 0
            || self.x >= game.width
            || self.y >= game.height;
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
        self.w *= x;
        self.h *= y;
    }

    self.shadow = function (x, y, blur, color) {
        self.shadow = {x: x, y: y, blur: blur, color: color};
    }

    self.translate = function (x, y) {
        self.x += game.toPPS(x);
        self.y += game.toPPS(y);
    }

}