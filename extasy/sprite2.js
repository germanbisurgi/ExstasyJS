var Sprite2 = function (game, spriteSheet, spriteWidth, spriteHeight) {

    "use strict";
    var self = this;
    self.game = game;
    self.name = null;
    self.spriteSheet = spriteSheet;
    self.spriteWidth = spriteWidth;
    self.spriteHeight = spriteHeight;
    self.spriteX = 0;
    self.spriteY = 0;
    self.spriteOffsetX = 0;
    self.spriteOffsetY = 0;

    self.counter = 0;
    self.animations = [];

    self.play = function (animationName) {
        var animation = self.getAnimation(animationName);
        if (animation) {
            var ssw = self.spriteSheet.width;
            var columns = self.spriteSheet.width / self.spriteWidth;
            var rows = self.spriteSheet.height / self.spriteHeight;
            if (self.game.frame % animation.velocity === 0) {
                self.counter = (self.counter + 1) % animation.sequence.length;
            }
            self.spriteY = Math.floor((animation.sequence[self.counter] + 1) / columns) * self.spriteHeight;
            self.spriteX = self.spriteWidth * animation.sequence[self.counter]  - ssw * self.spriteY / self.spriteHeight;
        } else {
            console.log('EXCEPTION: This animation does not exist ->', animationName);
            console.log('the game will be stoped');
            self.game.stop();
        }
    }

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

    self.scroll = function (direction, velocity) {
        if (direction ==='left') {
            self.spriteX += velocity;
            if (self.spriteX + self.spriteWidth >= self.spriteWidth * 2) {
                self.spriteX = 0;
            }
        }
        if (direction ==='right') {
            self.spriteX -= velocity;
            if (self.spriteX <= 0) {
                self.spriteX = self.spriteWidth;
            }
        }
        if (direction ==='up') {
            self.spriteY += velocity;
            if (self.spriteY + self.spriteHeight >= self.spriteHeight * 2) {
                self.spriteY = 0;
            }
        }
        if (direction ==='down') {
            self.spriteY -= velocity;
            if (self.spriteY <= 0) {
                self.spriteY = self.spriteHeight;
            }
        }
    }

}