var Sprite = function (game, image, sw, sh) {

    "use strict";
    var self = this;
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.type = 'sprite';
    self.name = null;
    self.image = image;
    self.sx = 0;
    self.sy = 0;
    self.sw = sw;
    self.sh = sh;
    self.dx;
    self.dy;
    self.dw = sw;
    self.dh = sh;
    self.angle = 0;
    self.spriteOffsetX = 0;
    self.spriteOffsetY = 0;
    self.opacity = 1.0;
    self.shadow = {};
    self.counter = 0;
    self.animations = [];

    self.addAnimation = function (name, sequence, velocity) {
        if (!self.getAnimation(name)) {
            self.animations.push({
                name: name,
                sequence: sequence,
                velocity: velocity
            });
        } else {
            // Exception.
            console.log('EXCEPTION: This animation is already in the list ->', name);
            console.log('the game will be stoped');
            game.stop();
        }
    }

    self.getAnimation = function (animationName) {
        var output = false;
        self.animations.forEach(function(animation, i) {
            if (animation.name == animationName) {
                output = animation;
            }
        });
        return output;
    }

    self.getAnimation = function (animationName) {
        var output = false;
        self.animations.forEach(function(animation, i) {
            if (animation.name == animationName) {
                output = animation;
            }
        });
        return output;
    }

    self.opacity = function (opacity) {
        self.opacity = opacity;
    }

    self.play = function (animationName) {
        var animation = self.getAnimation(animationName);
        if (animation) {
            var ssw = self.image.width;
            var columns = self.image.width / self.sw;
            var rows = self.image.height / self.sh;
            if (game.frame % animation.velocity === 0) {
                self.counter = (self.counter + 1) % animation.sequence.length;
            }
            self.sy = Math.floor((animation.sequence[self.counter] + 1) / columns) * self.sh;
            self.sx = self.sw * animation.sequence[self.counter]  - ssw * self.sy / self.sh;
        } else {
            console.log('EXCEPTION: This animation does not exist ->', animationName);
            console.log('the game will be stoped');
            game.stop();
        }
    }

    self.rotate = function (degrees) {
        self.angle += degrees;
    }

    self.setAngle = function (degrees) {
        self.angle = degrees;
    }    

    self.scale = function (x, y) {
        self.dw *= x;
        self.dh *= y;
    }

    self.shadow = function (x, y, blur, color) {
        self.shadow = {x: x, y: y, blur: blur, color: color};
    }

    self.scroll = function (direction, velocity) {
        if (direction ==='left') {
            self.sx += velocity;
            if (self.sx + self.sw >= self.sw * 2) {
                self.sx = 0;
            }
        }
        if (direction ==='right') {
            self.sx -= velocity;
            if (self.sx <= 0) {
                self.sx = self.sw;
            }
        }
        if (direction ==='up') {
            self.sy += velocity;
            if (self.sy + self.sh >= self.sh * 2) {
                self.sy = 0;
            }
        }
        if (direction ==='down') {
            self.sy -= velocity;
            if (self.sy <= 0) {
                self.sy = self.sh;
            }
        }
    }

    self.translate = function (x, y) {
        self.dx += x;
        self.dy += y;
    }

}