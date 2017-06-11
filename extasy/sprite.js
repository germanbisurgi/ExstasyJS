var Sprite = function (game, spriteSheet) {

    "use strict";
    var self = this;
    self.game = game;
    // core components.
    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.data = null;
    self.events = null;
    self.name = null;
    self.renderable = true;
    self.type = 'sprite';
    // sprite components.
    self.image = spriteSheet.image;
    self.sx = 0;
    self.sy = 0;
    self.sw = spriteSheet.sw;
    self.sh = spriteSheet.sh;
    self.dx = null;
    self.dy = null;
    self.dw = spriteSheet.sw;
    self.dh = spriteSheet.sh;
    self.ax = 0.5;
    self.ay =  0.5;
    self.angle = 0;
    self.opacity = 1.0;
    self.shadow = {};
    self.delay = 0;
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
    };

    self.destroy = function () {
        var index = game.entityManager.entities.indexOf(self);
        if (index > -1) {
            game.entityManager.entities.splice(index, 1);
        }
    };

    self.getAnimation = function (animationName) {
        var output = false;
        self.animations.forEach(function(animation) {
            if (animation.name === animationName) {
                output = animation;
            }
        });
        return output;
    };

    self.getAnimation = function (animationName) {
        var output = false;
        self.animations.forEach(function(animation) {
            if (animation.name === animationName) {
                output = animation;
            }
        });
        return output;
    };

    self.isOffCanvas = function() {
        return self.dx + self.dw <= 0 || self.dy + self.dh <= 0 || self.dx >= game.width || self.dy >= game.height;
    };

    self.opacity = function (opacity) {
        self.opacity = opacity;
    };

    self.play = function (animationName) {
        var animation = self.getAnimation(animationName);
        if (animation) {
            var columns = self.image.width / self.sw;
            var delta = self.game.timeManager.delta;
            self.delay += delta;

            if (self.delay >= animation.velocity) {
                self.counter = (self.counter + 1) % animation.sequence.length;
                self.delay = 0;
            }
            self.sy = Math.floor((animation.sequence[self.counter] + 1) / columns) * self.sh;
            self.sx = self.sw * animation.sequence[self.counter]  - self.image.width * self.sy / self.sh;
        } else {
            console.log('EXCEPTION: This animation does not exist ->', animationName);
            console.log('the game will be stoped');
            game.stop();
        }
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