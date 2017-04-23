var Sprite = function (game, spriteSheet, width, height) {

    "use strict";
    var self = this;
    self.game = game;
    self.sheet = spriteSheet;
    self.x = 0;
    self.y = 0;
    self.w = width;
    self.h = height;
    self.counter = 0;
    self.animations = [];

    self.addAnimation = function (name, row, sequence, velocity) {
        if (!self.getAnimation(name)) {
            self.animations.push({
                name: name,
                row: row,
                sequence: sequence,
                velocity: velocity
            });
        } else {
            // Exception.
            console.log('EXCEPTION: This animation is already in the list ->', name);
            console.log('the game will be stoped');
            self.game.stop();
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

    self.play = function (animationName) {
        var animation = self.getAnimation(animationName);
        if (animation) {
            self.y = animation.row * self.w;
            if (self.game.frame % animation.velocity === 0) {
                self.counter = (self.counter + 1) % animation.sequence.length;
            }
            self.x = self.w * animation.sequence[self.counter];
        } else {
            // Exception.
            console.log('EXCEPTION: This animation does not exist ->', animationName);
            console.log('the game will be stoped');
            self.game.stop();
        }
    }

    self.setOffset = function (x, y) {}

    self.animate = function (row, sequence, velocity) {
        self.y = row * self.w;
        if (self.game.frame % velocity === 0) {
            self.counter = (self.counter + 1) % sequence.length;
        }
        self.x = self.w * sequence[self.counter];
    }

    self.scroll = function (direction, velocity) {
        if (direction ==='left') {
            self.x += velocity;
            if (self.x + self.w >= self.w * 2) {
                self.x = 0;
            }
        }
        if (direction ==='right') {
            self.x -= velocity;
            if (self.x <= 0) {
                self.x = self.w;
            }
        }
        if (direction ==='up') {
            self.y += velocity;
            if (self.y + self.h >= self.h * 2) {
                self.y = 0;
            }
        }
        if (direction ==='down') {
            self.y -= velocity;
            if (self.y <= 0) {
                self.y = self.h;
            }
        }
    }

}