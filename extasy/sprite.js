Sprite = function (spriteSheet, width, height) {

    "use strict";
    var self = this;
    self.frame = 0;
    self.sheet = spriteSheet;
    self.x = 0;
    self.y = 0;
    self.w = width;
    self.h = height;
    self.counter = 0;

    self.animate = function (row, sequence, velocity) {
        self.frame++;
        self.y = row * self.w;
        if (self.frame % velocity === 0) {
            self.counter = (self.counter + 1) % sequence.length;
        }
        self.x = self.w * sequence[self.counter];
    }

}