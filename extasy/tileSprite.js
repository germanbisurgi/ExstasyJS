var TileSprite = function (game, dx, dy, dw, dh, image) {

    "use strict";
    var self = this;

    // to achiev a scroller background we pre-render in a off screen canvas,
    // a new image and then it paint it content to the real canvas.
    var tmpCanvas = document.createElement('canvas');
    var tmpContext = tmpCanvas.getContext('2d');
    tmpCanvas.width = image.width * 2;
    tmpCanvas.height = image.height * 2;
    tmpContext.drawImage(image, 0, 0, image.width * 0.5, image.height * 0.5);
    tmpContext.drawImage(image, image.width * 0.5, 0, image.width * 0.5, image.height * 0.5);
    tmpContext.drawImage(image, 0, image.height * 0.5, image.width * 0.5, image.height * 0.5);
    tmpContext.drawImage(image, image.width * 0.5, image.height * 0.5, image.width * 0.5, image.height * 0.5);

    // core components.
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.data;
    self.events;
    self.name = null;
    self.renderable = true;
    self.type = 'tileSprite';
    // tileSprite components.
    self.image = tmpCanvas;
    self.sx = 0;
    self.sy = 0;
    self.sw = image.width / 2;
    self.sh = image.height / 2;
    self.dx = dx;
    self.dy = dy;
    self.dw = dw;
    self.dh = dh;
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

    self.scroll = function (direction, velocity) {
        if (direction ==='left') {
            self.sx += game.toPPS(velocity);
            if (self.sx + self.sw >= self.sw * 2) {
                self.sx = 0;
            }
        }
        if (direction ==='right') {
            self.sx -= game.toPPS(velocity);
            if (self.sx <= 0) {
                self.sx = self.sw;
            }
        }
        if (direction ==='up') {
            self.sy += game.toPPS(velocity);;
            if (self.sy + self.sh >= self.sh * 2) {
                self.sy = 0;
            }
        }
        if (direction ==='down') {
            self.sy -= game.toPPS(velocity);;
            if (self.sy <= 0) {
                self.sy = self.sh;
            }
        }
    }

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